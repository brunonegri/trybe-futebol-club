import { Request, Response } from 'express';
import LeaderboardServices from '../services/LeaderboardServices';

export default class LeaderboardController {
  constructor(private service = new LeaderboardServices()) {
    this.getHomeBoard = this.getHomeBoard.bind(this);
    this.getAwayBoard = this.getAwayBoard.bind(this);
  }

  async getHomeBoard(req: Request, res: Response) {
    const matches = await this.service.getHomeBoard();
    return res.status(200).json(matches);
  }

  async getAwayBoard(req: Request, res: Response) {
    const matches = await this.service.getAwayBoard();
    return res.status(200).json(matches);
  }
}
