import { Router } from "express";
import { createProductController } from '../useCases/createProduct';

const productsRouter = Router();

productsRouter.post("/products", (req, res) =>
  createProductController.handle(req, res)
);
// productsRouter.get("/products", (req, res) =>
//   getAllTweetsController.handle(req, res)
// );
// productsRouter.delete("/products/:id", (req, res) =>
//   getAllTweetsController.handle(req, res)
// );
// productsRouter.put("/products/:id", (req, res) =>
//   getAllTweetsController.handle(req, res)
// );


export default productsRouter;