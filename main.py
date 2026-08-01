from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes import router


app = FastAPI(
    title="FuzzyCare API",
    description="AI-based Clinical Decision Support System using Fuzzy Logic",
    version="1.0.0"
)


app.add_middleware(
    CORSMiddleware,
    allow_origin_regex="http://localhost:\d+",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "FuzzyCare API is running 🚀"
    }



app.include_router(router)