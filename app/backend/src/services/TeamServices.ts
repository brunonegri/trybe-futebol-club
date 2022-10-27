import TeamsModel from '../database/models/TeamsModel';

export default class TeamServices {
  model = TeamsModel;

  constructor() {
    this.getAll = this.getAll.bind(this);
  }

  async getAll() {
    const teams = await this.model.findAll();
    return teams;
  }
}
