import * as express from 'express';
// import errorMiddleware from './middlewares/errorMiddleware';
import loginRouter from './routes/loginRouter';
import teamsRouter from './routes/teamsRouter';
import matchesRouter from './routes/matchesRouter';
import leaderboardRouter from './routes/leaderboardRouter';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
    this.app.use(loginRouter);
    this.app.use(teamsRouter);
    this.app.use(matchesRouter);
    this.app.use(leaderboardRouter);
    // this.app.use(errorMiddleware);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
