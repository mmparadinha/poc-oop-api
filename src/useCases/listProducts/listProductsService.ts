import { Request, Response } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import { Product } from "../../models/Product";
import { ProductsRepository } from '../../repositories/productsRepository';

export class ListProductsService {
  handle(req: Request<{}, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>, number>): void {
    throw new Error('Method not implemented.');
  }
  constructor(private productRepository: ProductsRepository) {}

  execute(): Promise<Product[]> {
    return this.productRepository.getAll();
  }
}