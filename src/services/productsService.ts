import { productsModel } from "../model/productsModel"


export const productsService = {
  getAllProducts: async () => {
    const products = await productsModel.getAllProducts();

    return products
  },
     
}
