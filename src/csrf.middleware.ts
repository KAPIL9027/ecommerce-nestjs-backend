import * as csurf from 'csurf';
import { Request, Response, NextFunction } from 'express';

const csrfProtection = csurf({
  cookie: {
    httpOnly: false,
    sameSite: 'strict',
    secure: true,
  },
});

const exempRoutes = ['/user/signin', '/user/signup'];

export function csrfMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  return csrfProtection(req, res, (err)=> {
    if( err && exempRoutes.includes(req.path)) {
        return next();
    }
    if(err) {
        return next(err);
    }
    next();
  });
}
