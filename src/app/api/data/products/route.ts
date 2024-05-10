import { NextResponse, NextRequest } from "next/server";
import { getProducts } from "~/server/db/requests";

export async function GET(request: Request) {
  const products = await getProducts();

  return NextResponse.json(products);
}
