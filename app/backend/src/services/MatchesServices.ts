import IMatches from '../interfaces/IMatch';
import TeamsModel from '../database/models/TeamsModel';
import MatchesModel from '../database/models/MatchesModel';

export default class MatchesServices {
  modelMatches = MatchesModel;
  modelTeams = TeamsModel;

  constructor() {
    this.getAll = this.getAll.bind(this);
    this.getByProgress = this.getByProgress.bind(this);
    this.create = this.create.bind(this);
    this.getById = this.getById.bind(this);
  }

  async getByProgress(progress?: boolean) {
    const matches = await this.modelMatches.findAll({
      include: [
        { model: this.modelTeams, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: this.modelTeams, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
      where: { inProgress: progress },
    });
    return matches;
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

  async getById(id:number) {
    const match = await this.modelMatches.findOne({ where: { id } });
    return match;
  }

  async create(body: IMatches) {
    const created = await this.modelMatches.create(body);
    console.log(created);

    return created.id;
  }
}
