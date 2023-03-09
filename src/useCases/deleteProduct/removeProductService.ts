import { ProductsRepository } from '../../repositories/productsRepository';

export class RemoveProductService {
  constructor(private productRepository: ProductsRepository) {}

  execute(id: number): void {
    this.productRepository.remove(id);
  }
}