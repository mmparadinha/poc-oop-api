import prisma from '../database/db';
import { Product } from "../models/Product";

export class ProductsRepository {
  protected static INSTANCE: ProductsRepository;

  public static getInstance(): ProductsRepository {
    if (!this.INSTANCE) this.INSTANCE = new ProductsRepository();
    return this.INSTANCE;
  }

  async create({ name, manufacturer, categoryId }: Product): Promise<void> {
    await prisma.products.create({
      data: {
        name,
        manufacturer,
        categoryId
      },
    });
  }

  async getAll(): Promise<Product[]> {
    return await prisma.products.findMany();
  }
}
