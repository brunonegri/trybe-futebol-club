import { Request, Response } from 'express';
import UserServices from '../services/UserServices';

export default class LoginController {
  constructor(private service = new UserServices()) {
    this.login = this.login.bind(this);
  }

  async login(req: Request, res: Response): Promise<Response> {
    const token = await this.service.login(req.body);
    return res.status(200).json({ token });
  }
}
