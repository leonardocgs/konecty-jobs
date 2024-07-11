import Product from "@/app/api/domain/Product";

const productDataMock = [
  new Product(
    "Adidas",
    "Samba",
    "Tênis Sambas OG White Black",
    "/adidas.webp",
    60.4,
  ),
  new Product(
    "Adidas",
    "SuperStar",
    "Tênis adidas Superstar XLG",
    "/adidas2.webp",
    30.75,
  ),
  new Product(
    "Nike",
    "Jordan 1",
    "Nike Tênis feminino Jordan Air Jordan 1 Mid SE Light Club",
    "/nike.jpg",
    50.4,
  ),

  new Product(
    "Nike",
    "Jordan 3",
    "Tênis Air Jordan 3 Retrô Masculino ",
    "/nike2.webp",
    20.3,
  ),

  new Product(
    "New Balance",
    "New Balance 550",
    `NEW BALANCE - 550 "White/Silver/Navy"`,
    "/new_balance.webp",
    20.2,
  ),

  new Product(
    "New Balance",
    "New Balance 530",
    `NEW BALANCE - 530 "White/Silver/Navy"`,
    "/new_balance2.webp",
    40.49,
  ),

  new Product(
    "Fila",
    "Disruptor",
    "Tênis Fila Disruptor II Premium Masculino",
    "/fila.webp",
    30.4,
  ),

  new Product(
    "Fila",
    "Mens MB",
    "Tênis Fila Tênis Fila Mb Unisex II Premium Masculino",
    "/fila2.jpg",
    45.48,
  ),
];
export default productDataMock;
