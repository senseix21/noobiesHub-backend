import express from 'express';
import { UserRoutes } from '../modules/users/user.route';
import { ProfileRoutes } from '../modules/profile/profile.route';
import { ProjectRoutes } from '../modules/projects/project.route';

const router = express.Router();

const moduleRoutes = [
    { path: '/users', route: UserRoutes },
    { path: '/profile', route: ProfileRoutes },
    { path: '/projects', route: ProjectRoutes }
]

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;