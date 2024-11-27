from fastapi import APIRouter, Depends
from fastapi.security import OAuth2PasswordRequestForm

from auth.models.user import Token, User
from auth.services.auth import authentication_user
from auth.jwt_handler import create_access_token
from auth.dependencies import get_current_user

router = APIRouter()

@router.post("/token", response_model=Token)
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    user = authentication_user(form_data.username, form_data.password)
    access_token = create_access_token(data={"sub": user.username})
    return {"access_token": access_token, "token_type": "bearer"}

@router.get("/users/me", response_model=User)
async def read_users_me(current_user: User = Depends(get_current_user)):
    return current_user