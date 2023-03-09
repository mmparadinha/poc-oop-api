import { Product } from '../../models/Product';
import { ProductsRepository } from '../../repositories/productsRepository';

export class ModifyProductService {
  constructor(private productRepository: ProductsRepository) {}

  execute({ id, name, manufacturer, categoryId }: Product): void {
    if (!name && !manufacturer && !categoryId) throw new Error("At least one field is mandatory!");

    this.productRepository.modify({ id, name, manufacturer, categoryId });
  }
}