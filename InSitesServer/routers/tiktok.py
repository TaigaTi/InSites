"""This file will serve to handle the Twitter API routes."""

from fastapi import APIRouter
from helpers.tiktokHelper import TiktokHelper

router = APIRouter(prefix="/api/v1/tiktok", tags=["TikTok"])

@router.get("/likes")
async def get_likes():
    return {"Likes": 57}

@router.get("/followers")
async def get_followers():
    return {"Followers": 12345}

@router.get("/following")
async def get_following():
    return {"Following": 54321}

@router.get("/posts")
async def get_posts():
    return {"Posts": 69}
