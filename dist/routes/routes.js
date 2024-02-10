import express from 'express';
import { userRouter } from './user.router.js';
import { searchRouter } from './search.router.js';
import { jobRouter } from './job.router.js';
export const router = express.Router();
router.use('/user', userRouter);
router.use('/job', jobRouter);
router.use('/search', searchRouter);
export const centralRouter = router;
