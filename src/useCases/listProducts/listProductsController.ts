import { Request, Response } from "express";
import { ListProductsService } from './listProductsService';

export class ListProductsController {
  constructor(private listProductsService: ListProductsService) {}

  async handle(req: Request, res: Response): Promise<{}> {
    const warehouseProducts = await this.listProductsService.execute();

    return res.status(200).send(warehouseProducts);
  }
}
