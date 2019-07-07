import { Router } from 'express';
const router = Router();

import {  updatemethod, getClients, getOneClient, deleteClient, updateClient } from '../controllers/Client.controller';


//router.post('/', createClients);

router.post('/client',updatemethod);

router.get('/', getClients);



router.get('/:email', getOneClient);



router.delete('/:id', deleteClient);


router.put('/:id', updateClient);



export default router;