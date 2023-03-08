export class Category {
  id?: number;
  name: string;
  sector: number;

  constructor(id: number, name: string, sector: number) {
    this.id = id;
    this.name = name;
    this.sector = sector;
  }
}