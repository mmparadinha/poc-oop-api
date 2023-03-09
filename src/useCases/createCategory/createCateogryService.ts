import { Category } from '../../models/Category';
import { CategoryRepository } from '../../repositories/categoryRepository';

export class CreateCategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  execute({ name, sector }: Category): void {
    if (!name || !sector) throw new Error("All fields are mandatory!");

    this.categoryRepository.create({ name, sector });
  }
}
