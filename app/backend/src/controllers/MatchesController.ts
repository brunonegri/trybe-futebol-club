import { Request, Response } from 'express';
import MatchesServices from '../services/MatchesServices';

export default class MatchesController {
  constructor(private service = new MatchesServices()) {
    this.getAll = this.getAll.bind(this);
    this.create = this.create.bind(this);
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

  async create(req: Request, res: Response) {
    console.log('aqui');

    const createdId = await this.service.create(req.body);
    console.log(createdId);

    const createdMatch = await this.service.getById(createdId);

    return res.status(201).json(createdMatch);
  }
}
