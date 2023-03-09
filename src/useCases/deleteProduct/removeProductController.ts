import { Request, Response } from "express";
import { RemoveProductService } from './removeProductService';

export class RemoveProductController {
  constructor(private removeProductService: RemoveProductService) { }

  handle(req: Request, res: Response): Response {
    const { id } = req.params;

    this.removeProductService.execute(Number(id));

    return res.sendStatus(204);
  }
}