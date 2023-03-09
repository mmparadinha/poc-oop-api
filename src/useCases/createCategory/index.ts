import { CategoryRepository } from '../../repositories/categoryRepository';
import { CreateCategoryController } from './createCategoryController';
import { CreateCategoryService } from './createCateogryService';

const categoryRepository = new CategoryRepository();
const createCategoryService = new CreateCategoryService(categoryRepository);
export const createCategoryController = new CreateCategoryController(
  createCategoryService
);
