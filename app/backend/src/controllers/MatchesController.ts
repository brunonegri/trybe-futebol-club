import { Request, Response } from 'express';
import MatchesServices from '../services/MatchesServices';

export default class MatchesController {
  constructor(private service = new MatchesServices()) {
    this.getAll = this.getAll.bind(this);
  }

  async getAll(req: Request, res: Response) {
    const { inProgress } = req.query;
    let matches;
    if (inProgress) {
      const boolProgress = inProgress === 'true';
      matches = await this.service.getByProgress(boolProgress);
    } else {
      matches = await this.service.getAll();
    }
    return res.status(200).json(matches);
  }
}
