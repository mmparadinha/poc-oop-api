import { Router } from "express";
import { createCategoryController } from '../useCases/createCategory';
import { listCategoryController } from '../useCases/listCategory';
import { removeCategoryController } from '../useCases/removeCategory';
import { modifyCategoryController } from '../useCases/updateCategory';

const categoriesRouter = Router();

categoriesRouter.post("/categories", (req, res) =>
  createCategoryController.handle(req, res)
);
categoriesRouter.get("/categories", (req, res) =>
  listCategoryController.handle(req, res)
);
categoriesRouter.delete("/categories/:id", (req, res) =>
  removeCategoryController.handle(req, res)
);
categoriesRouter.put("/categories/:id", (req, res) =>
  modifyCategoryController.handle(req, res)
);

export default categoriesRouter;