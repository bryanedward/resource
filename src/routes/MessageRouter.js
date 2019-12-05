import { Router } from 'express';
const router = Router();

import {authToken} from '../auth/VerifyTokenController';
import {getMessagePublications, postMessagesPublications} from '../controllers/MessageController';

router.get('/:idpublication', getMessagePublications);
router.post('/create',authToken, postMessagesPublications);

export default router;
