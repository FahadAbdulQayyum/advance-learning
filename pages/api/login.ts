// pages/api/login.ts
import { serialize } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Perform authentication (e.g., check against a database)
    if (username === 'test' && password === 'password') {
      // Set auth token in cookies
      const token = 'your-auth-token';
      const serializedCookie = serialize('authToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24, // 1 day
        path: '/',
      });

      res.setHeader('Set-Cookie', serializedCookie);
      return res.status(200).json({ message: 'Login successful' });
    }

    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.status(405).json({ message: 'Method not allowed' });
}