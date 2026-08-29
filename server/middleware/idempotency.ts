import { Request, Response, NextFunction } from 'express';

export const idempotencyMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers['idempotency-key']) {
    req.headers['idempotency-key'] = "AUTO_IDEM_" + Date.now() + "_" + Math.random().toString(36).substring(2, 9);
  }
  next();
};