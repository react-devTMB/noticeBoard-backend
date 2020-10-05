import { Application, Request, Response } from 'express';
import UserService from '../components/user/service';
import { HTTP_STATUS } from '../common/httpStatus';
import { NotFound } from '../common/error';

export class UserRoutes {
  private userService = new UserService();

  public route(app: Application): void {
    app.get('/api/user', async (req: Request, res: Response) => {
      const users = await this.userService.find();

      console.log(users);

      res.status(HTTP_STATUS.SUCCESS).json(users);
    });

    app.get('/api/user/:id', async (req: Request, res: Response) => {
      const id: string = req.params.id;

      console.log(id);

      const user = await this.userService.findById(id);

      if (!user) {
        throw new NotFound('해당 사용자를 찾을 수 없습니다.');
      }

      res.status(HTTP_STATUS.SUCCESS).json(user);
    });

    app.post('/api/user', async (req: Request, res: Response) => {
      const user = req.params;
    });

    app.put('/api/user/:id', async (req: Request, res: Response) => {});

    app.delete('/api/user/:id', async (req: Request, res: Response) => {});
  }
}
