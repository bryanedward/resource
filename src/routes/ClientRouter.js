import { Router } from 'express';
const router = Router();

import { createClients, getClients, getOneClient, deleteClient, updateClient } from '../controllers/Client.controller';


router.post('/', createClients);


router.get('/', getClients);



router.get('/:id', getOneClient);



router.delete('/:id', deleteClient);


router.put('/:id', updateClient);



export default router;