import { Router } from 'express';
import multipart from 'connect-multiparty';

const multipartMiddleware = multipart({uploadDir: './src/publications'});

const router = Router();

import {authToken} from '../auth/VerifyTokenController';
import { createPublication, getPublications,
    deletePublication, updatePublication, getOnePublication ,
    getPublicationByUserid , getUser, getUserDouble, getUpdate, getImage  } from '../controllers/Publication.controller';



router.get('/home',getPublications);

router.post('/create',authToken,multipartMiddleware,createPublication);

router.post('/updatePublication', updatePublication);

router.get('/:levelsubject', getOnePublication);

router.get('/image/:photopublt', getImage);











router.get('/client/:clientid', getPublicationByUserid);
router.get('/user/:clientid', getUser);

router.get('/update/:user', getUpdate);


router.delete('/:id', deletePublication);


export default router;
