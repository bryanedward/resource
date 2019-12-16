import { Router } from 'express';
const router = Router();

import {authToken} from '../auth/VerifyTokenController';
import {getMessagePublications,
  postMessagesPublications, deleteMessagePublications,
  updateMessagePublications} from '../controllers/MessageController';

router.get('/:idpublication', getMessagePublications);
router.post('/create',authToken, postMessagesPublications);
router.delete('/delete/:idmessage', deleteMessagePublications);
router.post('/update',updateMessagePublications);
export default router;
