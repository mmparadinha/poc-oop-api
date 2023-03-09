import { Product } from "../../models/Product";
import { ProductsRepository } from '../../repositories/productsRepository';

export class CreateProductService {
  constructor(private productRepository: ProductsRepository) {}

  execute({ name, manufacturer, categoryId }: Product): void {
    if (!name || !manufacturer || !categoryId) throw new Error("All fields are mandatory!");

    this.productRepository.create({ name, manufacturer, categoryId });
  }
}
