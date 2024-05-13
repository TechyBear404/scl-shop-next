import { NextResponse, NextRequest } from "next/server";
import { getProducts } from "~/actions/getProducts";

export async function GET(request: Request) {
  const products = await getProducts();

  return NextResponse.json(products);
}
