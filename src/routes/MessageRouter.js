import { Router } from 'express';
const router = Router();

import {authToken} from '../auth/VerifyTokenController';
import {getMessagePublications} from '../controllers/MessageController';

router.get('/:idpublication', authToken, getMessagePublications);


export default router;
