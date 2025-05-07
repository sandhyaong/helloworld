import { Request, Response } from 'express';

export const createUser = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'User created successfully!',
    data: req.body,
  });
};
