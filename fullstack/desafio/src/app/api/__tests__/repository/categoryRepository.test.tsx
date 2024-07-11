import CategoryRepository from "../../application/repository/CategoryRepository";
import Category from "../../domain/Category";
import CategoryRepositoryMemory from "../../infra/repository/CategoryRepositoryMemory";
import categoriesMock from "../../infra/repository/datamock/CategoryDataMock";

describe("CategoryRepository", () => {
  let categoryRepository: CategoryRepository;
  let savedCategories: string[];

  beforeAll(() => {
    categoryRepository = new CategoryRepositoryMemory();
    savedCategories = categoriesMock.map((category) => category.getValue());
  });
  describe("list", () => {
    it("Should return a list of categories", () => {
      const categories: Category[] = categoryRepository.list();
      expect(categories).not.toHaveLength(0);
    });
  });
  describe("categoryExists", () => {
    it("Should return true if a category exists", () => {
      const categoryExists = categoryRepository.categoryExists(
        savedCategories[0],
      );
      expect(categoryExists).toBe(true);
    });

    it("Should return false if a category does not exist", () => {
      const categoryExists = categoryRepository.categoryExists("idjasidjasi");
      expect(categoryExists).toBe(false);
    });
  });
});
