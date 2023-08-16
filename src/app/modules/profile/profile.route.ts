import express from 'express';
import { ProfileController } from './profile.controller';

const router = express.Router();

router.post('/create-profile', ProfileController.createProfile)
router.get('/:id', ProfileController.getSingleProfile)
router.get('/', ProfileController.getAllProfiles)

export const ProfileRoutes = router;