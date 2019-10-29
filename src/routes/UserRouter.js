import { Router } from 'express';
import multipart from 'connect-multiparty';

const multipartMiddleware = multipart({uploadDir: './src/photos'});

const router = Router();

import {  createUser, getUsers, getOneUser,
  deleteUser, updateUser, getImage, login, authToken } from '../controllers/User.controller';



router.post('/create',multipartMiddleware, createUser);

router.get('/', getUsers);

router.get('/image/:photoUser', getImage);

router.get('/:email', getOneUser);

router.post('/email/emailUser', login);

router.delete('/:id', deleteUser);

router.put('/:id', updateUser);

router.put('/update/:email', authToken);


export default router;
