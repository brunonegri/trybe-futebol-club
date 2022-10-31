import { hQuery, aQuery } from '../utils/queries';
import sequelizeModel from '../database/models/index';

export default class LeaderboardServices {
  sequelize = sequelizeModel;
  constructor() {
    this.getHomeBoard = this.getHomeBoard.bind(this);
    this.getAwayBoard = this.getAwayBoard.bind(this);
  }

  async getHomeBoard() {
    const [matches] = await this.sequelize.query(
      `${hQuery}`,
    );
    return matches;
  }

  async getAwayBoard() {
    const [awayBoard] = await this.sequelize.query(
      `${aQuery}`,
    );
    return awayBoard;
  }
}
