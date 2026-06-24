import { NextResponse } from 'next/server';

export async function GET() {
  const IG_USER_ID = '17841466185956296';
  const ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
  const FIELDS = 'id,caption,media_type,media_url,permalink,timestamp,thumbnail_url';
  
  const url = `https://graph.facebook.com/v25.0/${IG_USER_ID}/media?fields=${FIELDS}&access_token=${ACCESS_TOKEN}`;

  const res = await fetch(url);
  const data = await res.json();
  
  return NextResponse.json(data);
}