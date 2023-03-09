import { Request, Response } from "express";
import { ModifyCategoryService } from './modifyCategoryService';

export class ModifyCategoryController {
  constructor(private modifyCategoryService: ModifyCategoryService) {}

  handle(req: Request, res: Response): Response {
    const id = Number(req.params.id);
    const { name, sector } = req.body;

    this.modifyCategoryService.execute({ id, name, sector });

    return res.sendStatus(200);
  }
}
