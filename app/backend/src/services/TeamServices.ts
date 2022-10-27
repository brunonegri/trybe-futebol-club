import TeamsModel from '../database/models/TeamsModel';

export default class TeamServices {
  model = TeamsModel;

  constructor() {
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
  }

  async getAll() {
    const teams = await this.model.findAll();
    return teams;
  }

  async getById(id: string) {
    const team = await this.model.findOne({ where: { id } });
    return team;
  }
}
