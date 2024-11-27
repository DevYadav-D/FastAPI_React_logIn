from datetime import datetime, timedelta
from jose import JWTError, jwt
from fastapi import HTTPException
from auth.core.config import SECRET_KEY, ALGORITHM

def create_access_token(data: dict, expires_delta:timedelta=None)->str:
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=15))
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

def decode_access_token(token:str) -> str:
    try:
        return jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")