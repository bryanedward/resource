import { Router } from 'express';
const router = Router();

import {authToken} from '../auth/VerifyTokenController';
import {getLikes, createLikes ,
  createComplemeint, getComplemeint,
getLikesByUser, lockAccount} from '../controllers/LikesController';

router.get('/getLikes', getLikes);
router.post('/createLikes',authToken, createLikes);
router.post('/create/createComplemeints',authToken,createComplemeint);
router.get('/getAllComplemeint',getComplemeint);
router.get('/points',authToken,getLikesByUser);
router.post('/lock', lockAccount);

export default router;
