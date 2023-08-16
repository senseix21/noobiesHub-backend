import express from 'express';
import { ProjectController } from './project.controller';

const router = express.Router();

router.post('/create-project', ProjectController.createProject)
router.get('/', ProjectController.getProject)

export const ProjectRoutes = router;