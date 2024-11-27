from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from auth.db.user_db import get_user
from auth.jwt_handler import decode_access_token

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/token")

async def get_current_user(token: str = Depends(oauth2_scheme)):
    payload = decode_access_token(token)
    username: str = payload.get("sub")
    if username is None:
        raise HTTPException(status_code=401, detail="Invalid token")
    user = get_user(username)
    if user is None:
        raise HTTPException(status_code=401, detail="User not found")
    return user