import { Router } from 'express';
const router = Router();

import {  updatemethod, getClients, getOneClient, deleteClient, updateClient, login } from '../controllers/Client.controller';



router.post('/client',updatemethod);

router.get('/', getClients);
router.get('/:email', getOneClient);

router.get('/email/:login', login);



router.delete('/:id', deleteClient);


router.put('/:id', updateClient);



export default router;