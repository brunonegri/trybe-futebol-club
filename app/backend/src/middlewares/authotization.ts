import { NextFunction, Request, Response } from 'express';
import { decodeToken } from '../utils/token';

export default function authorizes(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token must be a valid token' });

  try {
    decodeToken(authorization);
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }

  return next();
}
