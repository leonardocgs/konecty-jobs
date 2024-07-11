import CategoryRepository from "../repository/CategoryRepository";

export default class GetCategories {
  constructor(private readonly categoryRepository: CategoryRepository) {}
  execute(): Output {
    return this.categoryRepository
      .list()
      .map((category) => category.getValue());
  }
}
type Output = string[];
