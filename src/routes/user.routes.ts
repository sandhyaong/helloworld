import { Router } from 'express';
import { createUser } from '../controllers/user.controller';
import { validateUser } from '../validators/user.validator';

const router = Router();

router.post('/', validateUser, createUser);

export default router;
