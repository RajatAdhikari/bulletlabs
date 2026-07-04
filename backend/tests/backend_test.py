"""Boltlabs backend tests - Contact API"""
import os
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://dimensional-labs.preview.emergentagent.com').rstrip('/')
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


class TestContact:
    def test_create_valid_and_persist(self, client):
        payload = {
            "name": "TEST_User",
            "email": "test_user@example.com",
            "details": "TEST_ automated contact submission"
        }
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["details"] == payload["details"]
        assert "id" in data and len(data["id"]) > 0
        assert "timestamp" in data

        # Verify persistence via GET
        rg = client.get(f"{API}/contact")
        assert rg.status_code == 200
        ids = [m["id"] for m in rg.json()]
        assert data["id"] in ids

    def test_invalid_email(self, client):
        r = client.post(f"{API}/contact", json={
            "name": "TEST_x", "email": "not-an-email", "details": "hi"
        })
        assert r.status_code == 422

    def test_missing_fields(self, client):
        r = client.post(f"{API}/contact", json={"name": "TEST_x"})
        assert r.status_code == 422

    def test_empty_name(self, client):
        r = client.post(f"{API}/contact", json={
            "name": "", "email": "a@b.com", "details": "hello"
        })
        assert r.status_code == 422

    def test_empty_details(self, client):
        r = client.post(f"{API}/contact", json={
            "name": "TEST_x", "email": "a@b.com", "details": ""
        })
        assert r.status_code == 422
