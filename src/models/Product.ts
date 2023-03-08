export class Product {
  id?: number;
  name: string;
  manufacturer: string;
  categoryId: number;

  constructor(id: number, name: string, manufacturer: string, categoryId: number) {
    this.id = id;
    this.name = name;
    this.manufacturer = manufacturer;
    this.categoryId = categoryId;
  }
}