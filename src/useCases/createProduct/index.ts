import { ProductsRepository } from '../../repositories/productsRepository';
import { CreateProductController } from './createProductController';
import { CreateProductService } from './createProductService';

const warehouseRepository = ProductsRepository.getInstance();
const createProductService = new CreateProductService(warehouseRepository);
export const createProductController = new CreateProductController(
  createProductService
);