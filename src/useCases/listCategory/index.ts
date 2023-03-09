import { CategoryRepository } from '../../repositories/categoryRepository';
import { ListCategoryController } from './listCategoryController';
import { ListCategoryService } from './listCategoryService';

const categoryRepository = new CategoryRepository();
const listCategoryService = new ListCategoryService(categoryRepository);
export const listCategoryController = new ListCategoryController(
  listCategoryService
);
