import { NextRequest, NextResponse } from "next/server";
import CategoryRepositoryMemory from "../infra/repository/CategoryRepositoryMemory";
import ProductRepositoryMemory from "../infra/repository/ProductRepositoryMemory";
import {
  GetProduct,
  GetProductOutput,
} from "../application/usecases/getProduct";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const name = searchParams.get("name") ?? undefined;
    const category = searchParams.get("category") ?? undefined;
    const categoryRepository = new CategoryRepositoryMemory();
    const productRepository = new ProductRepositoryMemory();
    const getProduct = new GetProduct(productRepository, categoryRepository);
    const products = getProduct.execute({ category, name });
    return NextResponse.json<GetProductOutput>(products, { status: 200 });
  } catch (e) {
    if (e instanceof Error) {
      return NextResponse.json({ message: e.message }, { status: 400 });
    }
  }
}
