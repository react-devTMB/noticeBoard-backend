import { NextFunction } from 'express';
import { Document, Schema, model } from 'mongoose';

export interface User extends Document {
  email: string;
  password: string;
  name: string;
  reg_date: Date;
  last_login: Date;
  role_id: string;
}

const schema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  reg_date: { type: Date, required: true },
  last_login: { type: Date, required: true },
  role_id: { type: String, required: true },
});

// Pres
// schema.pre('save', (next: NextFunction) => {
//   console.log(1);
//   next();
// });

export const UserModel = model<User>('User', schema);
