import { NextResponse } from "next/server";
import CategoryRepositoryMemory from "../infra/repository/CategoryRepositoryMemory";
import GetCategories from "../application/usecases/getCategories";

export async function GET() {
  try {
    const categoryRepository = new CategoryRepositoryMemory();
    const getProduct = new GetCategories(categoryRepository);
    const categories = getProduct.execute();
    return NextResponse.json(categories, { status: 200 });
  } catch (e) {
    if (e instanceof Error) {
      return NextResponse.json({ message: e.message }, { status: 500 });
    }
  }
}
