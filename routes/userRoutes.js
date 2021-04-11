import express from 'express';

const router = express.Router();

import {registerUser, loginUser, dashboard} from '../controllers/userController.js'

import protect from '../middleware/authMiddleware.js';

// Guest Routes
router.route('/user').post(registerUser);
router.route('/login').post(loginUser);

// Pretocted Route
router.route('/dashboard').get(protect, dashboard)

export default router;