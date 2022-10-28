import { Router } from 'express';
import authMatches from '../middlewares/authMatches';
import MatchesController from '../controllers/MatchesController';
import authorizes from '../middlewares/authotization';

const router = Router();
const matchesController = new MatchesController();

router.get('/matches', matchesController.getAll);

router.post('/matches', authorizes, authMatches, matchesController.create);

router.patch('/matches/:id/finish', authorizes, matchesController.update);

router.patch('/matches/:id', authorizes, matchesController.updateScore);

export default router;
