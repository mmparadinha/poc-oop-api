import { Category } from '../../models/Category';
import { CategoryRepository } from '../../repositories/categoryRepository';

export class ListCategoryService {
  constructor(private categoryRepository: CategoryRepository) { }

  execute(): Promise<Category[]> {
    return this.categoryRepository.getAll();
  }
}
