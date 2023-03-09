import { Request, Response } from "express";
import { CreateCategoryService } from './createCateogryService';

export class CreateCategoryController {
  constructor(private createCategoryService: CreateCategoryService) {}

  handle(req: Request, res: Response): Response {
    const { name, sector } = req.body;

    this.createCategoryService.execute({ name, sector });

    return res.sendStatus(201);
  }
}
