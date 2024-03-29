import { Router } from 'express';
import multipart from 'connect-multiparty';
import {authToken} from '../auth/VerifyTokenController';

const multipartMiddleware = multipart({uploadDir: './src/photos'});

const router = Router();

import {  createUser, getOneUser,
  deleteUser, updateUser,
  getImage, login, getPoints, getDataUser } from '../controllers/User.controller';


router.post('/login',login);

router.post('/create',multipartMiddleware, createUser);

router.get('/image/:photoUser', getImage);

router.get('/dataUser',authToken, getDataUser);

router.get('/getPoints', authToken, getPoints);










router.get('/:id', getOneUser);


router.delete('/:id', deleteUser);

router.put('/:id', updateUser);

//router.put('/update/:email', authToken);


export default router;
