import Category from "./Category";

export default class Product {
  private category: Category;
  private name: string;
  private description: string;
  private imageUri: string;
  private price: number;
  constructor(
    category: string,
    name: string,
    description: string,
    imageUri: string,
    price: number,
  ) {
    this.category = new Category(category);
    this.name = name;
    this.description = description;
    this.imageUri = imageUri;
    this.price = price;
  }
  getCategory() {
    return this.category.getValue();
  }
  getName() {
    return this.name;
  }
  getDescription() {
    return this.description;
  }
  getImageUri() {
    return this.imageUri;
  }
  getPrice() {
    return this.price;
  }
}
