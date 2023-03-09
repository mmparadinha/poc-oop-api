import { Router } from "express";
import { createProductController } from '../useCases/createProduct';
import { removeProductController } from '../useCases/deleteProduct';
import { listProductsController } from '../useCases/listProducts';
import { modifyProductController } from '../useCases/updateProduct';

const productsRouter = Router();

productsRouter.post("/products", (req, res) =>
  createProductController.handle(req, res)
);
productsRouter.get("/products", (req, res) =>
  listProductsController.handle(req, res)
);
productsRouter.delete("/products/:id", (req, res) =>
  removeProductController.handle(req, res)
);
productsRouter.put("/products/:id", (req, res) =>
  modifyProductController.handle(req, res)
);

export default productsRouter;