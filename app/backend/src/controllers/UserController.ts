import { Request, Response } from 'express';
import UserServices from '../services/UserServices';

export default class LoginController {
  constructor(private service = new UserServices()) {
    this.getRole = this.getRole.bind(this);
  }

  async getRole(req: Request, res: Response) {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: 'unauthorized' });
    }
    const role = await this.service.getUserRole(authorization);
    return res.status(200).json(role);
  }
}
