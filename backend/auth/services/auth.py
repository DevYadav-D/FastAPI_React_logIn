from fastapi import HTTPException
from auth.db.user_db import get_user
from auth.hashing import verify_password

def authentication_user(username: str, password: str):
    user = get_user(username)
    if user and verify_password(password, user.hashed_password):
        return user
    raise HTTPException(status_code=400, detail="Invalid credentials")