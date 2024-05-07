import { Request, Response } from 'express';
import { productsService } from '../services/productsService';

export const productsController = {
  getAllProducts: async (req: Request, res: Response) => {
    const products = await productsService.getAllProducts();

    res.status(200).json(products);
  },
}
