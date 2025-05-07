import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

const userSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email format'),
  age: z.number().min(18, 'Age must be at least 18'),
});

export const validateUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    req.body = userSchema.parse(req.body);
    next();
  } catch (err: any) {
    next(err);
  }
};
