import { Router } from 'express';
const router = Router();

import {authToken} from '../auth/VerifyTokenController';
import {getLikes, createLikes , createComplemeint} from '../controllers/LikesController';

router.get('/getLikes', getLikes);
router.post('/createLikes',authToken, createLikes);
router.post('/create/createComplemeints',authToken,createComplemeint);
export default router;
