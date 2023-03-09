import { ProductsRepository } from '../../repositories/productsRepository';
import { ListProductsController } from '../deleteProduct/removeProductController';
import { ListProductsService } from '../deleteProduct/removeProductService';

const productRepository = new ProductsRepository();
const listProductsService = new ListProductsService(productRepository);
export const listProductsController = new ListProductsController(
  listProductsService
);