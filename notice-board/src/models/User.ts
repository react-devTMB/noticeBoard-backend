import { NextFunction } from 'express';
import { Document, Schema, model, Model } from 'mongoose';

export interface User extends Document {
  email: string;
  password: string;
  name: string;
  reg_date: Date;
  last_login: Date;
  role_id: string;
}

const UserSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  reg_date: { type: Date },
  last_login: { type: Date },
  role_id: { type: String, required: true },
});

// Pres
UserSchema.pre<User>('save', function (next) {
  if (this.isNew) {
    this.reg_date = new Date();
  }
  next();
});

export const UserModel = model<User>('User', UserSchema);
