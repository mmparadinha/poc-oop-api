import { CategoryRepository } from '../../repositories/categoryRepository';
import { ModifyCategoryController } from './modifyCategoryController';
import { ModifyCategoryService } from './modifyCategoryService';

const categoryRepository = new CategoryRepository();
const modifyCategoryService = new ModifyCategoryService(categoryRepository);
export const modifyCategoryController = new ModifyCategoryController(
  modifyCategoryService
);
