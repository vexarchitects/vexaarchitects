import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const IG_USER_ID = '17841466185956296';
  const ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
  // Ensure you include 'media_type' to filter correctly
  const FIELDS = 'id,caption,media_type,media_url,permalink,timestamp,thumbnail_url';
  
  const url = `https://graph.facebook.com/v25.0/${IG_USER_ID}/media?fields=${FIELDS}&access_token=${ACCESS_TOKEN}`;

  try {
    const res = await fetch(url, { cache: 'no-store' });
    const data = await res.json();

    // 1. Check if the response contains an error from Facebook
    if (data.error) {
      return NextResponse.json({ error: data.error.message, data: [] }, { status: 400 });
    }

    // 2. Return data in the exact structure your component expects
    return NextResponse.json({ data: data.data || [] });
  } catch (error) {
     return NextResponse.json({ error: error.message, data: [] }, { status: 500 });
  }
} 