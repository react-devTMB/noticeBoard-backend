import { NextFunction, Request, Response, Router } from 'express';
import UserService from '../services/user';
import { HTTP_STATUS } from '../common/httpStatus';
import { NotFound, BusinessException } from '../exception';
import logger from '../config/logger';

export default class UserRoutes {
  private router: Router = Router();
  private userService = new UserService();

  public getRouter(): Router {
    this.router.get('/user', async (req: Request, res: Response, next: NextFunction) => {
      const users = await this.userService.find();

      logger.debug(JSON.stringify(users));

      next(new BusinessException('test error', HTTP_STATUS.NOT_ALLOWED_METHOD));

      // res.status(HTTP_STATUS.SUCCESS).json(users);
    });

    this.router.get('/user/:id', async (req: Request, res: Response) => {
      const id: string = req.params.id;

      console.log(id);

      const user = await this.userService.findById(id);

      if (!user) {
        throw new NotFound('해당 사용자를 찾을 수 없습니다.');
      }

      res.status(HTTP_STATUS.SUCCESS).json(user);
    });

    this.router.post('/user', async (req: Request, res: Response) => {
      const user = await this.userService.save(req.body);
      res.status(HTTP_STATUS.SUCCESS).json(user);
    });

    this.router.put('/user/:id', async (req: Request, res: Response) => {});

    this.router.delete('/user/:id', async (req: Request, res: Response) => {});
    return this.router;
  }
}
