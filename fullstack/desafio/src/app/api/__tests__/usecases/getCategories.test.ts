import GetCategories from "../../application/usecases/getCategories";
import CategoryRepositoryMemory from "../../infra/repository/CategoryRepositoryMemory";

describe("getCategories", () => {
  let getCategories: GetCategories;
  beforeAll(() => {
    const categoryRepository = new CategoryRepositoryMemory();
    getCategories = new GetCategories(categoryRepository);
  });
  it("Should return all the categories", () => {
    const categories = getCategories.execute();
    expect(categories).toContain("Adidas");
    expect(categories).toContain("Nike");
    expect(categories).toContain("Fila");
    expect(categories).toContain("New Balance");
  });
});
