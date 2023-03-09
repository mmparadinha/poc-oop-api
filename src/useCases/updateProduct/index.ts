import { ProductsRepository } from '../../repositories/productsRepository';
import { ModifyProductController } from './modifyProductController';
import { ModifyProductService } from './modifyProductService';

const productRepository = new ProductsRepository();
const modifyProductService = new ModifyProductService(productRepository);
export const modifyProductController = new ModifyProductController(
  modifyProductService
);
