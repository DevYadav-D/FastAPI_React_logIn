from typing import Dict, Optional
from auth.models.user import UserInDB
from auth.hashing import pwd_context

fake_user_db: Dict[str, Dict[str, str]] = {
    "testuser": {
        "username": "testuser",
        "hashed_password": pwd_context.hash("testpassword"),
    }
}

def get_user(username: str) -> Optional[UserInDB]:
    user = fake_user_db.get(username)
    if user:
        return UserInDB(**user)
    return None