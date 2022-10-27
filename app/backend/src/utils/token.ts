import { sign, verify } from 'jsonwebtoken';
import { decode } from 'punycode';

const secret = process.env.JWT_SECRET;

interface Token {
  role: string
  email: string
}

export function generateToken(payload:Token) {
  return sign(payload, secret as string, { expiresIn: '2d' });
}

export function authenticateToken(token:string) {
  const auth = verify(token, secret as string);
  return auth;
}

export function decodeToken(token:string) {
  return decode(token);
}
