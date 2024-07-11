import Category from "@/app/domain/Category";

export default interface CategoryRepository {
  list(): Category[];
  categoryExists(categoryName: string): boolean;
}
