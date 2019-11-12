import { Router } from 'express';
const router = Router();

import {authToken} from '../auth/VerifyTokenController';
import { createPublication, getPublications,
    deletePublication, updatePublication, getOnePublication ,
    getPublicationByUserid , getUser, getUserDouble, getUpdate  } from '../controllers/Publication.controller';



router.get('/', authToken ,getPublications);


router.post('/create', authToken ,createPublication);



router.get('/:id', getOnePublication);
router.get('/client/:clientid', getPublicationByUserid);
router.get('/user/:clientid', getUser);
router.get('/data/user', getUserDouble);
router.get('/update/:user', getUpdate);


router.delete('/:id', deletePublication);

router.put('/:id', updatePublication);

export default router;
