import express from 'express';
const router = express.Router();
import { loginUser, register, verifyUser } from '../controllers/user.js';
import { isAuth } from '../middleware/isAuth.js';

router.post('/user/register', register);
router.post('/user/verify', verifyUser);
router.post('/user/login', loginUser);
//router.get('/user/me', isAuth, myProfile);

export default router;
