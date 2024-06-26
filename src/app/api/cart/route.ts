import { NextResponse, NextRequest } from "next/server";
import { getProducts } from "~/actions/getProducts";
import { getCart } from "~/actions/getCart";
import { addProductToCart } from "~/actions/addProductToCart";

export async function GET(request: Request) {
  const cart = await getCart();
  // if (!session?.user) {
  //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  // }

  return NextResponse.json(cart);
}

export async function POST(request: NextRequest) {
  // const body = await request.json();
  // console.log({ body });

  return NextResponse.json("POST request received");
}

// const add = await addToCart();
