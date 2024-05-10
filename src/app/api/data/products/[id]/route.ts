import { NextResponse, NextRequest } from "next/server";
import { getProduct } from "~/server/db/requests";

export async function GET(
  request: Request,
  context: { params: { id: string } },
) {
  const { id } = context.params;
  const product = await getProduct(parseInt(id));
  return NextResponse.json(product);
}
