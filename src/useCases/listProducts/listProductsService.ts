import { Product } from "../../models/Product";
import { ProductsRepository } from '../../repositories/productsRepository';

export class ListProductsService {
  constructor(private productRepository: ProductsRepository) {}

  execute(): Promise<Product[]> {
    return this.productRepository.getAll();
  }
}