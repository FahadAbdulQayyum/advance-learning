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
      maxAge: 60 * 60 * 24, // 1 day
      path: '/',
    });

    return new Response(JSON.stringify({ message: 'Login successful' }), {
      status: 200,
      headers: { 'Set-Cookie': serializedCookie },
    });
  }

  return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
}










// // pages/api/login.ts
// import { serialize } from 'cookie';
// import { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     console.log('...req.body...', req.body);
//     const { username, password } = req.body;

//     // Perform authentication (e.g., check against a database)
//     if (username === 'test' && password === 'password') {
//       // Set auth token in cookies
//       const token = 'your-auth-token';
//       const serializedCookie = serialize('authToken', token, {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production',
//         sameSite: 'strict',
//         maxAge: 60 * 60 * 24, // 1 day
//         path: '/',
//       });

//       res.setHeader('Set-Cookie', serializedCookie);
//       return res.status(200).json({ message: 'Login successful' });
//     }

//     return res.status(401).json({ message: 'Invalid credentials' });
//   }

//   res.status(405).json({ message: 'Method not allowed' });
// }