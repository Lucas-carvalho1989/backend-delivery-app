import express from 'express';
import { productsController } from '../controllers/productsController';

const productsRouter = express.Router();

productsRouter.get('/', productsController.getAllProducts);
productsRouter.get('/:id', () => console.log('create product'));
productsRouter.post('/', () => console.log('create product'));
productsRouter.put('/:id', () => console.log('edit product'));
productsRouter.delete('/:id', () => console.log('delete product'));

export { productsRouter };