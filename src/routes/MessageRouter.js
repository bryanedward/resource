import { Router } from 'express';
const router = Router();

import {authToken} from '../auth/VerifyTokenController';
import {getMessagePublications,
  postMessagesPublications, deleteMessagePublications} from '../controllers/MessageController';

router.get('/:idpublication', getMessagePublications);
router.post('/create',authToken, postMessagesPublications);
router.delete('/:idmessage', deleteMessagePublications);

export default router;
