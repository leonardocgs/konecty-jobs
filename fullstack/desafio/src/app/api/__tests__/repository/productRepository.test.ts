import ProductRepository from "../../application/repository/ProductRepository";
import ProductRepositoryMemory from "../../infra/repository/ProductRepositoryMemory";

let productRepository: ProductRepository;

describe("ProductRepository", () => {
  beforeAll(() => {
    productRepository = new ProductRepositoryMemory();
  });

  describe("list", () => {
    it("should return a list of products", () => {
      const products = productRepository.list();

      expect(products).toBeDefined();
      expect(Array.isArray(products)).toBe(true);
      expect(products.length).toBeGreaterThan(0);
    });
  });

  describe("getByCategory", () => {
    it("should return a list of products filtered by category", () => {
      const category = "Adidas";
      const products = productRepository.getByCategory(category);

      expect(products).toBeDefined();
      expect(Array.isArray(products)).toBe(true);
      expect(products.length).toBeGreaterThan(0);

      products.forEach((product) => {
        expect(product.getCategory()).toBe(category);
      });
    });

    it("should return an empty list when the category does not exist", () => {
      const nonExistentCategory = "NonExistentCategory";
      const products = productRepository.getByCategory(nonExistentCategory);

      expect(products).toEqual([]);
    });
  });

  describe("getByName", () => {
    it("should return a list of products filtered by name", () => {
      const name = "Samba";
      const products = productRepository.getByName(name);

      expect(products).toBeDefined();
      expect(Array.isArray(products)).toBe(true);
      expect(products.length).toBeGreaterThan(0);

      products.forEach((product) => {
        expect(product.getName()).toBe(name);
      });
    });

    it("should return an empty list when the name does not exist", () => {
      const nonExistentName = "NonExistentName";
      const products = productRepository.getByName(nonExistentName);

      expect(products).toEqual([]);
    });
  });

  describe("getByCategoryAndName", () => {
    it("should return a list of products filtered by category and name", () => {
      const category = "Adidas";
      const name = "Samba";
      const products = productRepository.getByCategoryAndName(category, name);

      expect(products).toBeDefined();
      expect(Array.isArray(products)).toBe(true);
      expect(products.length).toBeGreaterThan(0);

      products.forEach((product) => {
        expect(product.getCategory()).toBe(category);
        expect(product.getName()).toBe(name);
      });
    });

    it("should return an empty list when the category and name combination does not exist", () => {
      const nonExistentCategory = "NonExistentCategory";
      const nonExistentName = "NonExistentName";
      const products = productRepository.getByCategoryAndName(
        nonExistentCategory,
        nonExistentName,
      );

      expect(products).toEqual([]);
    });

    it("should return an empty list when the category exists but the name does not", () => {
      const existingCategory = "Adidas";
      const nonExistentName = "NonExistentName";
      const products = productRepository.getByCategoryAndName(
        existingCategory,
        nonExistentName,
      );

      expect(products).toEqual([]);
    });

    it("should return an empty list when the name exists but the category does not", () => {
      const nonExistentCategory = "NonExistentCategory";
      const existingName = "Jordan 1";
      const products = productRepository.getByCategoryAndName(
        nonExistentCategory,
        existingName,
      );

      expect(products).toEqual([]);
    });
  });
});
