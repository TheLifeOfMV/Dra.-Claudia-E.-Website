from fastapi import FastAPI, BackgroundTasks, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, validator
import os
from dotenv import load_dotenv
from typing import List, Optional
from datetime import datetime

# Load environment variables
load_dotenv()

# Initialize FastAPI
app = FastAPI(
    title="General Surgeon API",
    description="Backend for a patient-centric general surgeon website",
    version="0.1.0"
)

# Configure CORS
origins = [
    "http://localhost:3000",  # Development frontend
    "https://general-surgeon-website.vercel.app",  # Production frontend
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Models
class AppointmentRequest(BaseModel):
    name: str
    email: EmailStr
    phone: str
    preferred_date: str
    preferred_time: str
    reason: str
    notes: Optional[str] = None
    
    @validator('name')
    def name_must_not_be_empty(cls, v):
        if not v.strip():
            raise ValueError('Name cannot be empty')
        return v.strip()
    
    @validator('phone')
    def validate_phone(cls, v):
        # Basic phone validation - can be enhanced
        v = v.strip()
        if not v or len(v) < 10:
            raise ValueError('Invalid phone number')
        return v

# Mock email sender (to be implemented)
async def send_confirmation_email(email: str, name: str, date: str, time: str):
    # In a real application, this would use an email service
    print(f"Sending confirmation email to {email} for appointment on {date} at {time}")
    # Implement actual email sending here

# Routes
@app.get("/api/v1/health")
async def health_check():
    return {"status": "ok", "timestamp": datetime.now().isoformat()}

@app.post("/api/v1/appointments")
async def create_appointment(appointment: AppointmentRequest, background_tasks: BackgroundTasks):
    try:
        # Schedule email in background
        background_tasks.add_task(
            send_confirmation_email, 
            appointment.email, 
            appointment.name, 
            appointment.preferred_date, 
            appointment.preferred_time
        )
        
        # In production, save to database here
        
        return {
            "status": "success",
            "message": "Appointment request received",
            "data": {
                "name": appointment.name,
                "date": appointment.preferred_date,
                "time": appointment.preferred_time
            }
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Root route - API information
@app.get("/")
async def root():
    return {
        "app_name": "General Surgeon API",
        "version": "0.1.0",
        "docs_url": "/docs"
    } 