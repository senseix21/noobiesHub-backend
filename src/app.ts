import express, { Application } from 'express';
import cors from 'cors';
import router from './app/routes';

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/v1', router);

app.get('/', (req, res) => {
    res.send('Hello from noobiesHub');
});

export default app;