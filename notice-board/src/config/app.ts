import express, { Application, NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserRoutes from '../routes/user';
import exceptionHandler from '../middleware/exceptionHandler';
import logger from './winston';

dotenv.config();

class App {
  public app: Application;
  private dbName: string = process.env.DB_NAME || '';
  private dbPassword: string = process.env.DB_PASSWORD || '';
  private userRoutes = new UserRoutes();

  constructor() {
    this.app = express();

    // configuration or set up
    this.config();
    this.mongoSetup();

    // routes
    this.app.use('/api/v1', this.userRoutes.getRouter());

    // exception handler middleware
    this.app.use(exceptionHandler);
  }

  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());
    // support application/x-www-urlencoded type post data
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  private mongoSetup(): void {
    const mongoUri = `mongodb+srv://tmb:${this.dbPassword}@tmb.mxhut.mongodb.net/${this.dbName}?retryWrites=true&w=majority`;
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    mongoose.connect(
      mongoUri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      },
      () => logger.debug('connected to Mongo DB')
    );
  }
}

export default new App().app;
