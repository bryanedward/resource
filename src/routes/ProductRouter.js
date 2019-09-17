import { Router } from 'express';
const router = Router();


import {authToken} from '../controllers/VerifyTokenController';
import { createProduct, getProducts, 
    deleteProduct, updateProduct, getOneProduct , 
    getProductByClientid , getUser, getUserDouble, getUpdate } from '../controllers/Product.controller';

router.post('/', createProduct);

router.get('/', authToken ,getProducts);


router.get('/:id', getOneProduct);

router.get('/client/:clientid', getProductByClientid);

router.get('/user/:clientid', getUser);

router.get('/data/user', getUserDouble);

router.get('/update/:user', getUpdate);

router.delete('/:id', deleteProduct);

router.put('/:id', updateProduct);

export default router;
