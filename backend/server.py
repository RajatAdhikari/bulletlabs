from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import asyncio
import logging
import resend
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")


class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: str = ""
    details: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class ContactMessageCreate(BaseModel):
    name: str = Field(min_length=1, max_length=200)
    email: EmailStr
    phone: str = Field(min_length=5, max_length=20)
    details: str = Field(min_length=1, max_length=5000)


@api_router.get("/")
async def root():
    return {"message": "Boltlabs API"}


resend.api_key = os.environ.get('RESEND_API_KEY')


async def send_lead_notification(msg: "ContactMessage"):
    try:
        params = {
            "from": os.environ['SENDER_EMAIL'],
            "to": [os.environ['NOTIFY_EMAIL']],
            "subject": f"New Lead: {msg.name} — Boltlabs",
            "html": f"""
            <table width='100%' cellpadding='0' cellspacing='0' style='background:#0a0a0a;padding:32px;font-family:Arial,sans-serif;'>
              <tr><td>
                <table width='600' cellpadding='0' cellspacing='0' style='margin:0 auto;background:#141414;border-radius:12px;padding:32px;color:#ffffff;'>
                  <tr><td style='font-size:20px;font-weight:bold;color:#B26CE8;padding-bottom:16px;'>&#9889; New Lead — Boltlabs</td></tr>
                  <tr><td style='padding:8px 0;color:#a1a1aa;font-size:13px;'>NAME</td></tr>
                  <tr><td style='padding-bottom:12px;font-size:16px;'>{msg.name}</td></tr>
                  <tr><td style='padding:8px 0;color:#a1a1aa;font-size:13px;'>EMAIL</td></tr>
                  <tr><td style='padding-bottom:12px;font-size:16px;'><a href='mailto:{msg.email}' style='color:#B26CE8;'>{msg.email}</a></td></tr>
                  <tr><td style='padding:8px 0;color:#a1a1aa;font-size:13px;'>PHONE</td></tr>
                  <tr><td style='padding-bottom:12px;font-size:16px;'><a href='tel:{msg.phone}' style='color:#B26CE8;'>{msg.phone}</a></td></tr>
                  <tr><td style='padding:8px 0;color:#a1a1aa;font-size:13px;'>PROJECT DETAILS</td></tr>
                  <tr><td style='font-size:15px;line-height:1.6;'>{msg.details}</td></tr>
                  <tr><td style='padding-top:24px;color:#71717a;font-size:12px;'>Received {msg.timestamp.strftime('%d %b %Y, %H:%M UTC')}</td></tr>
                </table>
              </td></tr>
            </table>
            """,
        }
        email = await asyncio.to_thread(resend.Emails.send, params)
        logger.info(f"Lead notification sent: {email.get('id')}")
    except Exception as e:
        logger.error(f"Failed to send lead notification: {e}")


@api_router.post("/contact", response_model=ContactMessage)
async def create_contact_message(input: ContactMessageCreate):
    msg = ContactMessage(**input.model_dump())
    doc = msg.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.contact_messages.insert_one(doc)
    asyncio.create_task(send_lead_notification(msg))
    return msg


@api_router.get("/contact", response_model=List[ContactMessage])
async def get_contact_messages():
    docs = await db.contact_messages.find({}, {"_id": 0}).to_list(1000)
    for d in docs:
        if isinstance(d['timestamp'], str):
            d['timestamp'] = datetime.fromisoformat(d['timestamp'])
    return docs


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
