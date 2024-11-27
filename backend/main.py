from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from auth.api.auth import router as auth_router

import uvicorn

app = FastAPI()

origins = [
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"]
)

app.include_router(auth_router, prefix="/auth", tags=["auth"])

if __name__ == "__main__":
    uvicorn.run("main:app", reload = True)