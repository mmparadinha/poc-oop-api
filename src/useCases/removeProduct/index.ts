import { ProductsRepository } from '../../repositories/productsRepository';
import { RemoveProductController } from './removeProductController';
import { RemoveProductService } from './removeProductService';

const productRepository = new ProductsRepository();
const removeProductService = new RemoveProductService(productRepository);
export const removeProductController = new RemoveProductController(
  removeProductService
);
