import { Router } from 'express';
import authLogin from '../middlewares/authLogin';
import authorizes from '../middlewares/authotization';
import UserController from '../controllers/UserController';

const router = Router();
const userController = new UserController();

router.post('/login', authLogin);

router.get('/login/validate', authorizes, userController.getRole);

export default router;
