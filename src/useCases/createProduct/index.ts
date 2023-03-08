import { ProductsRepository } from '../../repositories/productsRepository';
import { CreateProductController } from './createProductController';
import { CreateProductService } from './createProductService';

const productRepository = ProductsRepository.getInstance();
const createProductService = new CreateProductService(productRepository);
export const createProductController = new CreateProductController(
  createProductService
);