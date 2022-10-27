import { NextFunction, Request, Response } from 'express';
import { compare } from 'bcryptjs';
import { generateToken } from '../utils/token';
import UserServices from '../services/UserServices';

const userService = new UserServices();

export default async function authLogin(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  const user = await userService.getUser(req.body);

  if (!user) return res.status(401).json({ message: 'Incorrect email or password' });

  const comparison = await compare(password, user.password);

  if (!comparison) return res.status(401).json({ message: 'Incorrect email or password' });

  const payload = { email: user.email, role: user.role };
  const token = generateToken(payload);
  res.status(200).json({ token });

  next();
}
