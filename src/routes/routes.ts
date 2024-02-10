import express, { Router } from 'express';
import { userRouter } from './user.router.js';
import { searchRouter } from './search.router.js';
import { jobRouter } from './job.router.js';

export const router: Router = express.Router();

router.use('/user', userRouter);
router.use('/job', jobRouter);
router.use('/search', searchRouter);

export const centralRouter = router;