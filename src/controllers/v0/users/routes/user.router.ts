import {Router, Request, Response} from 'express';

import {User} from '../models/User';
import {AuthRouter} from './auth.router';

const router: Router = Router();

router.use('/auth', AuthRouter);

router.get('/');

router.get('/:id', async (req: Request, res: Response) => {
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(new Date().toLocaleString() + `: ${ip} GET /users/${id} - Get user info`);
  const {id} = req.params;
  const item = await User.findByPk(id);
  res.send(item);
});

export const UserRouter: Router = router;
