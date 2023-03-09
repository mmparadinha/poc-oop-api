import { Category } from '../../models/Category';
import { CategoryRepository } from '../../repositories/categoryRepository';

export class ModifyCategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  execute({ id, name, sector }: Category): void {
    if (!name && !sector) throw new Error("At least one field is mandatory!");

    this.categoryRepository.modify({ id, name, sector });
  }
}
