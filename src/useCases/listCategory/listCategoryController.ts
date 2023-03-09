import { Request, Response } from "express";
import { ListCategoryService } from './listCategoryService';

export class ListCategoryController {
  constructor(private listCategoryService: ListCategoryService) { }

  async handle(req: Request, res: Response): Promise<{}> {
    const warehouseCategories = await this.listCategoryService.execute();

    return res.status(200).send(warehouseCategories);
  }
}
