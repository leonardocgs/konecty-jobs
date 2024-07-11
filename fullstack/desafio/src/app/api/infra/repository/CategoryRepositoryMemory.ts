import CategoryRepository from "../../application/repository/CategoryRepository";
import Category from "../../domain/Category";
import categoriesMock from "./datamock/CategoryDataMock";

export default class CategoryRepositoryMemory implements CategoryRepository {
  categories: Category[] = categoriesMock;
  list(): Category[] {
    return this.categories;
  }
  categoryExists(categoryName: string): boolean {
    return this.categories.some(
      (category) => category.getValue() === categoryName,
    );
  }
}
