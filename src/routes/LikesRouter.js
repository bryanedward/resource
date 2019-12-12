import { Router } from 'express';
const router = Router();

import {authToken} from '../auth/VerifyTokenController';
import {getLikes, createLikes} from '../controllers/LikesController';

router.get('/getLikes', getLikes);
router.post('/createLikes',authToken, createLikes);
export default router;
