import ILogin from '../interfaces/ILogin';
import UserModel from '../database/models/UserModel';
import { decodeToken } from '../utils/token';

export default class UserServices {
  model = UserModel;

  constructor() {
    this.getUser = this.getUser.bind(this);
    this.getUserRole = this.getUserRole.bind(this);
  }

  async getUser(body: ILogin) {
    const { email } = body;
    const user = await this.model.findOne({ where: { email } });
    return user;
  }

  getUserRole = (token: string) => {
    const { role } = decodeToken(token);
    return { role };
  };
}
