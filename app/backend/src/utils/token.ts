import { sign, verify, JwtPayload } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;

interface Token {
  role: string
  email: string
}

interface IdecodeToken extends JwtPayload {
  payload: {
    role: string
    email: string
  }
}

export function generateToken(payload:Token) {
  return sign(payload, secret as string, { expiresIn: '2d' });
}

export function decodeToken(token:string) {
  const auth = verify(token, secret as string) as IdecodeToken;
  return auth;
}
