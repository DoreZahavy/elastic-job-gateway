import express from 'express'
import { addJob, getJobById, getJobs, removeJob, updateJob } from './job.controller.js';
import { requireAuth } from '../../middlewares/requireAuth.middleware.js';
import { log } from '../../middlewares/logger.middleware.js';

const router = express.Router()

router.get('/', getJobs)
router.get('/:id', getJobById)
router.post('/', log, addJob)
router.put('/:id', updateJob)
router.delete('/:id', removeJob)

export const jobRoutes = router