import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ZodError) {
    return res.status(400).json({
      success: false,
      errors: err.errors.map(e => ({
        field: e.path.join('.'),
        message: e.message,
      })),
    });
  }

  console.error(err);
  res.status(500).json({ success: false, message: 'Internal Server Error' });
};

export default errorMiddleware;
