import { GetProduct, ProductDTO } from "../../application/usecases/getProduct";
import ProductRepositoryMemory from "../../infra/repository/ProductRepositoryMemory";
import CategoryRepositoryMemory from "../../infra/repository/CategoryRepositoryMemory";

describe("GetProduct", () => {
  let getProduct: GetProduct;

  beforeAll(() => {
    const productRepository = new ProductRepositoryMemory();
    const categoryRepository = new CategoryRepositoryMemory();
    getProduct = new GetProduct(productRepository, categoryRepository);
  });

  it("should retrieve all the products", () => {
    const products = getProduct.execute({});
    expect(products).toBeDefined();
    expect(products.length).toBeGreaterThan(0);
    products.forEach((product: ProductDTO) => {
      expect(product.category).toBeDefined();
      expect(product.name).toBeDefined();
      expect(product.description).toBeDefined();
      expect(product.imageUri).toBeDefined();
    });
  });

  it("should retrieve products by category", () => {
    const category = "Adidas";
    const products = getProduct.execute({ category });
    expect(products).toBeDefined();
    products.forEach((product: ProductDTO) => {
      expect(product.category).toBe(category);
    });
  });

  it("should retrieve products by name", () => {
    const name = "Jordan 1";
    const products = getProduct.execute({ name });
    expect(products).toBeDefined();
    products.forEach((product: ProductDTO) => {
      expect(product.name.toLowerCase()).toContain(name.toLowerCase());
    });
  });

  it("should retrieve products by category and name", () => {
    const category = "Adidas";
    const name = "Samba";
    const products = getProduct.execute({ category, name });
    expect(products).toBeDefined();
    products.forEach((product: ProductDTO) => {
      expect(product.category).toBe(category);
      expect(product.name.toLowerCase()).toContain(name.toLowerCase());
    });
  });

  it("should throw error when category does not exist", () => {
    const category = "Nonexistent Category";
    expect(() => getProduct.execute({ category })).toThrowError(
      "Category does not exist",
    );
  });

  it("should throw error when no products are found by category and name", () => {
    const category = "Adidas";
    const name = "Nonexistent Product";
    expect(() => getProduct.execute({ category, name })).toThrowError(
      `No products found for category '${category}' and name '${name}'`,
    );
  });

  it("should throw error when no products are found by category", () => {
    const category = "Dior";
    expect(() => getProduct.execute({ category })).toThrowError(
      `No products found for category '${category}'`,
    );
  });
  it("should throw error when no products are found by name", () => {
    const name = "Nonexistent Product";
    expect(() => getProduct.execute({ name })).toThrowError(
      `No products found with name '${name}'`,
    );
  });
});
