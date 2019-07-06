import { Router } from 'express';
const router = Router();

import { createProduct, getProducts, deleteProduct, updateProduct, getOneProduct , getProductByClientid} from '../controllers/Product.controller';

router.post('/', createProduct);

router.get('/', getProducts);

router.delete('/:id', deleteProduct);

router.put('/:id', updateProduct);

router.get('/:id', getOneProduct);

router.get('/client/:clientid', getProductByClientid);

export default router;
