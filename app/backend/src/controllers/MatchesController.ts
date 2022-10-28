import { Request, Response } from 'express';
import MatchesServices from '../services/MatchesServices';

export default class MatchesController {
  constructor(private service = new MatchesServices()) {
    this.getAll = this.getAll.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.updateScore = this.updateScore.bind(this);
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
    const createdId = await this.service.create(req.body);
    const createdMatch = await this.service.getById(createdId);

    return res.status(201).json(createdMatch);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    await this.service.update(Number(id));
    res.status(200).json({ message: 'Finished' });
  }

  async updateScore(req: Request, res: Response) {
    const { id } = req.params;
    const updatedMatch = await this.service.updateScore(Number(id), req.body);
    res.status(200).json(updatedMatch);
  }
}
