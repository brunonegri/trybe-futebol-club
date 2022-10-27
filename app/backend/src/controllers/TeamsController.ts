import { Request, Response } from 'express';
import TeamServices from '../services/TeamServices';

export default class TeamsController {
  constructor(private service = new TeamServices()) {
    this.getAll = this.getAll.bind(this);
  }

  async getAll(req: Request, res: Response) {
    const teams = await this.service.getAll();
    return res.status(200).json(teams);
  }
}
