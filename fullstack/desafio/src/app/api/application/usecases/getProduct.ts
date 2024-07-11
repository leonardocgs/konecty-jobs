import ProductRepository from "../repository/ProductRepository";
import CategoryRepository from "../repository/CategoryRepository";
import Product from "../../domain/Product";

export interface ProductDTO {
  category: string;
  name: string;
  description: string;
  imageUri: string;
  price: number;
}
export type GetProductOutput = ProductDTO[];

type Input = { category?: string; name?: string };
export class GetProduct {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly categoryRepository: CategoryRepository,
  ) {}
  execute({ category, name }: Input): GetProductOutput {
    let products: Product[] = [];

    if (category && name) {
      products = this.getByCategoryAndName(category, name);
    } else if (category) {
      products = this.getByCategory(category);
    } else if (name) {
      products = this.getByName(name);
    } else {
      products = this.getAllProducts();
    }

    const output: ProductDTO[] = products.map((product) => ({
      category: product.getCategory(),
      name: product.getName(),
      description: product.getDescription(),
      imageUri: product.getImageUri(),
      price: product.getPrice(),
    }));

    return output;
  }

  private getByCategoryAndName(category: string, name: string) {
    if (!this.categoryRepository.categoryExists(category)) {
      throw new Error("Category does not exist");
    }
    const products = this.productRepository.getByCategoryAndName(
      category,
      name,
    );
    if (products.length === 0) {
      throw new Error(
        `No products found for category '${category}' and name '${name}'`,
      );
    }
    return products;
  }

  private getByCategory(category: string) {
    if (!this.categoryRepository.categoryExists(category)) {
      throw new Error("Category does not exist");
    }
    const products = this.productRepository.getByCategory(category);
    if (products.length === 0) {
      throw new Error(`No products found for category '${category}'`);
    }
    return products;
  }

  private getByName(name: string) {
    const products = this.productRepository.getByName(name);
    if (products.length === 0) {
      throw new Error(`No products found with name '${name}'`);
    }
    return products;
  }

  private getAllProducts() {
    const products = this.productRepository.list();
    if (products.length === 0) {
      throw new Error("No products found");
    }
    return products;
  }
}
