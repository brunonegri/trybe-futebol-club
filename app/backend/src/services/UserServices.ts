import ILogin from '../interfaces/ILogin';
import UserModel from '../database/models/UserModel';
import { generateToken } from '../utils/token';

export default class LoginServices {
  model = UserModel;

  constructor() {
    this.login = this.login.bind(this);
  }

  async login(body: ILogin) {
    const { email } = body;
    const user = await this.model.findOne({ where: { email } });

    if (user) {
      const payload = { email: user.email, role: user.role };
      const token = generateToken(payload);
      return token;
    }
  }
}
