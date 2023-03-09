import { Request, Response } from "express";
import { ModifyProductService } from './modifyProductService';

export class ModifyProductController {
  constructor(private modifyProductService: ModifyProductService) {}

  handle(req: Request, res: Response): Response {
    const id = Number(req.params.id);
    const { name, manufacturer, categoryId } = req.body;

    this.modifyProductService.execute({ id, name, manufacturer, categoryId });

    return res.sendStatus(200);
  }
}
