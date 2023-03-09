import prisma from '../database/db';
import { Product } from "../models/Product";

export class ProductsRepository {
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

  async remove(id: number) {
    await prisma.products.delete({
      where: {
        id: id
      }
    });
  }
}
