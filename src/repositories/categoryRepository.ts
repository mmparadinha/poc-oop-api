import prisma from '../database/db';
import { Category } from '../models/Category';

export class CategoryRepository {
  async create({ name, sector }: Category): Promise<void> {
    await prisma.category.create({
      data: {
        name,
        sector
      },
    });
  }

  async getAll(): Promise<Category[]> {
    return await prisma.category.findMany();
  }

  async remove(id: number) {
    await prisma.category.delete({
      where: {
        id
      }
    });
  }

  async modify({ id, name, sector }: Category): Promise<void> {
    await prisma.category.update({
      data: {
        name,
        sector
      },
      where: {
        id
      }
    });
  }
}
