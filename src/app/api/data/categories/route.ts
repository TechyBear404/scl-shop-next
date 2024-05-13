import { NextResponse, NextRequest } from "next/server";
import { getCategories } from "~/actions/getCategories";

export async function GET(request: NextRequest) {
  const categories = await getCategories();

  return NextResponse.json(categories);
}
