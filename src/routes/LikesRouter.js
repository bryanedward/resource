import { Router } from 'express';
const router = Router();

import {authToken} from '../auth/VerifyTokenController';
import {getLikes, createLikes , createComplemeint, getComplemeint} from '../controllers/LikesController';

router.get('/getLikes', getLikes);
router.post('/createLikes',authToken, createLikes);
router.post('/create/createComplemeints',authToken,createComplemeint);
router.get('/getAllComplemeint',getComplemeint);

export default router;
