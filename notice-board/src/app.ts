import express, { Application, NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserRoutes from './routes/user';
import exceptionHandler from './middleware/exceptionHandler';
import logger from './config/logger';

dotenv.config();

class App {
  public app: Application;

  private port = process.env.PORT || 3000;
  private mongoUri = process.env.MONGO_URI || '';
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
    this.app.set('port', this.port);
    // support application/json type post data
    this.app.use(express.json());
    // support application/x-www-urlencoded type post data
    this.app.use(express.urlencoded({ extended: true }));
  }

  private mongoSetup(): void {
    void mongoose.connect(
      this.mongoUri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      },
      () => console.log('  Connected to Mongo DB')
    );
  }
}

export default new App().app;
