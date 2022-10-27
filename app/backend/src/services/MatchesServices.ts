import TeamsModel from '../database/models/TeamsModel';
import MatchesModel from '../database/models/MatchesModel';

export default class MatchesServices {
  modelMatches = MatchesModel;
  modelTeams = TeamsModel;

  constructor() {
    this.getAll = this.getAll.bind(this);
  }

  async getAll() {
    const matches = await this.modelMatches.findAll({
      include: [
        { model: this.modelTeams, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: this.modelTeams, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });
    return matches;
  }
}
