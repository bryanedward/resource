import { Router } from 'express';
import multipart from 'connect-multiparty';
const multipartMiddleware = multipart({uploadDir: './photos'});

const router = Router();

import {  createClient, getClients, getOneClient, deleteClient, updateClient, login, authToken } from '../controllers/Client.controller';



router.post('/data', createClient);

router.get('/', getClients);


router.get('/:email', getOneClient);
router.get('/email/login', login);



router.delete('/:id', deleteClient);


router.put('/:id', updateClient);
router.put('/update/:email', authToken);


export default router;
