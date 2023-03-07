import { Product } from "../../models/Product";
import { ProductsRepository } from '../../repositories/productsRepository';

export class CreateProductService {
  constructor(private productRepository: ProductsRepository) {}

  execute({ name, manufacturer, category }: Product): void {
    if (!name || !manufacturer || !category) throw new Error("All fields are mandatory!");

    this.productRepository.create({ name, manufacturer, category });
  }
}