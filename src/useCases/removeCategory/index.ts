import { CategoryRepository } from '../../repositories/categoryRepository';
import { RemoveCategoryController } from './removeCategoryController';
import { RemoveCategoryService } from './removeCategoryService';

const categoryRepository = new CategoryRepository();
const removeCategoryService = new RemoveCategoryService(categoryRepository);
export const removeCategoryController = new RemoveCategoryController(
  removeCategoryService
);
