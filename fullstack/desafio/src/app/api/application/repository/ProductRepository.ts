import Product from "@/app/domain/Product";

export default interface ProductRepository {
  list(): Product[];
  getByCategory(category: string): Product[];
  getByName(name: string): Product[];
  getByCategoryAndName(category: string, name: string): Product[];
}
