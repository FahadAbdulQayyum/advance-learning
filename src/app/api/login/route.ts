// src/app/api/login/route.ts
import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST(request: Request) {
  const { username, password } = await request.json();

  console.log('API route hit:', { username, password }); // Log the request

  // Perform authentication (e.g., check against a database)
  if (username === 'test' && password === 'password') {
    const token = 'your-auth-token';
    const serializedCookie = serialize('authToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      // maxAge: 60 * 60 * 24, // 1 day
      maxAge: 60, // 1 day
      path: '/',
    });

    return new Response(JSON.stringify({ message: 'Login successful' }), {
      status: 200,
      headers: { 'Set-Cookie': serializedCookie },
    });
  }

  return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
}