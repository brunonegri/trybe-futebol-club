import { Router } from 'express';
import authMatches from '../middlewares/authMatches';
import MatchesController from '../controllers/MatchesController';
import authorizes from '../middlewares/authotization';

const router = Router();
const matchesController = new MatchesController();

router.get('/matches', matchesController.getAll);

router.post('/matches', authorizes, authMatches, matchesController.create);

export default router;
