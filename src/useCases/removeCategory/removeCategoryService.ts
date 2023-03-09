import { CategoryRepository } from '../../repositories/categoryRepository';

export class RemoveCategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  execute(id: number): void {
    this.categoryRepository.remove(id);
  }
}
