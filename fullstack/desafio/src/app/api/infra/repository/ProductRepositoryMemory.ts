import ProductRepository from "../../application/repository/ProductRepository";
import Product from "../../domain/Product";
import productDataMock from "./datamock/ProductDataMock";

export default class ProductRepositoryMemory implements ProductRepository {
  private products: Product[] = productDataMock;

  list(): Product[] {
    return this.products;
  }

  getByCategory(category: string): Product[] {
    return this.products.filter(
      (product) => product.getCategory() === category,
    );
  }
  getByName(name: string): Product[] {
    return this.products.filter((product) => product.getName() === name);
  }
  getByCategoryAndName(category: string, name: string): Product[] {
    return this.products
      .filter((product) => product.getCategory() === category)
      .filter((product) => product.getName() === name);
  }
}
