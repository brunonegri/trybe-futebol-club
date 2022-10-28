import { NextFunction, Request, Response } from 'express';
import TeamServices from '../services/TeamServices';

const teamServices = new TeamServices();

export default async function authMatches(req: Request, res: Response, next: NextFunction) {
  const fields = req.body;
  const getHomeTeam = await teamServices.getById(fields.homeTeam);
  const getAwayTeam = await teamServices.getById(fields.awayTeam);

  if (fields.homeTeam === fields.awayTeam) {
    return res.status(422)
      .json({ message: 'It is not possible to create a match with two equal teams' });
  }
  if (!getHomeTeam || !getAwayTeam) {
    return res.status(404).json({ message: 'There is no team with such id!' });
  }

  return next();
}
