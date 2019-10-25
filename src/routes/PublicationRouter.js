import { Router } from 'express';
const router = Router();


import {authToken} from '../controllers/VerifyTokenController';
import { createPublication, getPublications,
    deletePublication, updatePublication, getOnePublication ,
    getPublicationByUserid , getUser, getUserDouble, getUpdate , newToken } from '../controllers/Publication.controller';

router.post('/', createPublication);

router.get('/', authToken ,getPublications);
router.get('/token',authToken ,newToken);
router.get('/:id', getOnePublication);
router.get('/client/:clientid', getPublicationByUserid);
router.get('/user/:clientid', getUser);
router.get('/data/user', getUserDouble);
router.get('/update/:user', getUpdate);


router.delete('/:id', deletePublication);

router.put('/:id', updatePublication);

export default router;
