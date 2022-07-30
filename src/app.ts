import express, { Express } from 'express';
import helmet from 'helmet';
import compression from 'compression';
import 'dotenv/config';
import routes from './routes/index';

const PORT = process.env.PORT || 3000;

const app: Express = express();
app.set('port', PORT);

app.use(helmet());
app.use(express.json());
app.use(compression());
app.use('/', routes);

export default app;
