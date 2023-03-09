import { Request, Response } from "express";
import { RemoveCategoryService } from './removeCategoryService';

export class RemoveCategoryController {
  constructor(private removeCategoryService: RemoveCategoryService) { }

  handle(req: Request, res: Response): Response {
    const { id } = req.params;

    this.removeCategoryService.execute(Number(id));

    return res.sendStatus(204);
  }
}
