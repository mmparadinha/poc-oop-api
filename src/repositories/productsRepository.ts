import { Product } from "../models/Product";

export class ProductsRepository {
  private products: Product[];
  private static INSTANCE: ProductsRepository;

  constructor() {
    this.products = [];
  }

  public static getInstance(): ProductsRepository {
    if (!this.INSTANCE) {
      this.INSTANCE = new ProductsRepository();
    }

    return this.INSTANCE;
  }

  create({ name, manufacturer, category }: Product): void {
    const newTweet: Product = new Product(name, manufacturer, category);
    this.products.push(newTweet);
  }

  getAll(start: number, end: number): Product[] {
    if (this.products.length <= 10) {
      return this.reverseTweets();
    }
    return this.reverseTweets().slice(start, end);
  }

  private reverseTweets(): Product[] {
    return [...this.products].reverse();
  }
}
