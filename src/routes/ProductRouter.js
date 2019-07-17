import { Router } from 'express';
const router = Router();

import { createProduct, getProducts, 
    deleteProduct, updateProduct, getOneProduct , 
    getProductByClientid , getUser, getUserDouble} from '../controllers/Product.controller';

router.post('/', createProduct);

router.get('/', getProducts);

router.get('/:id', getOneProduct);

router.get('/client/:clientid', getProductByClientid);

router.get('/user/:clientid', getUser);

router.get('/data/user', getUserDouble);

router.delete('/:id', deleteProduct);

router.put('/:id', updateProduct);

export default router;
