import express, { Router } from 'express';
import { userRoutes } from './api/user/user.routes.js';
import { searchRoutes } from './api/search/search.routes.js';
import { jobRoutes } from './api/job/job.routes.js';

export const router: Router = express.Router();

router.use('/user', userRoutes);
router.use('/job', jobRoutes);
router.use('/search', searchRoutes);

export const centralRouter = router;