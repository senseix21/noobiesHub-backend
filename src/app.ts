import express, { Application } from 'express';
import cors from 'cors';

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// app.use('api/v1',);

export default app;