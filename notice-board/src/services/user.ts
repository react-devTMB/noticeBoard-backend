import { DocumentQuery, Query } from 'mongoose';
import { User, UserModel } from '../models/User';

export default class UserService {
  public find(): DocumentQuery<User[], User> {
    return UserModel.find();
  }

  public findById(id: string): DocumentQuery<User | null, User> {
    return UserModel.findById(id);
  }

  public save(user: User): Promise<User> {
    const userModel = new UserModel(user);
    return userModel.save();
  }

  public update(user: User): Query<number> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return UserModel.update({ email: user.email }, { ...user });
  }

  // public remove(user: User): Query<void> {
  //   return UserModel.remove({ email: user.email });
  // }
}
