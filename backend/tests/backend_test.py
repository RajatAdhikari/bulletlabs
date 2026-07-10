"""Boltlabs backend tests - Contact API with phone field"""
import os
import pytest
import requests

BASE_URL = os.environ['REACT_APP_BACKEND_URL'].rstrip('/') if os.environ.get('REACT_APP_BACKEND_URL') else None
# Fallback to reading frontend .env
if not BASE_URL:
    from pathlib import Path
    for line in Path('/app/frontend/.env').read_text().splitlines():
        if line.startswith('REACT_APP_BACKEND_URL='):
            BASE_URL = line.split('=', 1)[1].strip().rstrip('/')
            break
API = f"{BASE_URL}/api"


@pytest.fixture
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


class TestRoot:
    def test_root(self, client):
        r = client.get(f"{API}/")
        assert r.status_code == 200
        assert r.json().get("message") == "Boltlabs API"


class TestContactPhone:
    def test_create_with_phone_persists(self, client):
        payload = {
            "name": "TEST_PhoneUser",
            "email": "test_phone@example.com",
            "phone": "+919971210492",
            "details": "TEST_ phone field submission",
        }
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data.get("phone") == payload["phone"], f"phone not returned: {data}"
        assert data["details"] == payload["details"]

        # Verify GET persistence
        rg = client.get(f"{API}/contact")
        assert rg.status_code == 200
        match = [m for m in rg.json() if m["id"] == data["id"]]
        assert match, "Created record not found in GET"
        assert match[0].get("phone") == payload["phone"], f"phone not persisted: {match[0]}"

    def test_missing_phone_returns_422(self, client):
        r = client.post(f"{API}/contact", json={
            "name": "TEST_x", "email": "a@b.com", "details": "hello"
        })
        assert r.status_code == 422, f"expected 422, got {r.status_code}: {r.text}"

    def test_short_phone_returns_422(self, client):
        r = client.post(f"{API}/contact", json={
            "name": "TEST_x", "email": "a@b.com", "phone": "123", "details": "hello"
        })
        assert r.status_code == 422, f"expected 422, got {r.status_code}: {r.text}"

    def test_get_backward_compat_old_records(self, client):
        # Old records without phone shouldn't cause 500
        r = client.get(f"{API}/contact")
        assert r.status_code == 200
        for m in r.json():
            assert "phone" in m  # model has default ""

    def test_invalid_email(self, client):
        r = client.post(f"{API}/contact", json={
            "name": "TEST_x", "email": "not-an-email", "phone": "+911234567", "details": "hi"
        })
        assert r.status_code == 422
