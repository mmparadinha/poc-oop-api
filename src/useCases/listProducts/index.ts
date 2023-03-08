import { ProductsRepository } from '../../repositories/productsRepository';
import { ListProductsController } from './listProductsController';
import { ListProductsService } from './listProductsService';

const productRepository = ProductsRepository.getInstance();
const listProductsService = new ListProductsService(productRepository);
export const listProductsController = new ListProductsController(
  listProductsService
);