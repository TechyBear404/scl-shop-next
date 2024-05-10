import { NextResponse, NextRequest } from "next/server";
import { getCategories } from "~/server/db/requests";

export async function GET(request: Request) {
  const categories = await getCategories();

  return NextResponse.json(categories);
}
