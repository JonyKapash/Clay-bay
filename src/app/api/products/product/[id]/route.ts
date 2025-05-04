import { NextRequest, NextResponse } from "next/server";
import { mockProducts } from "@/data/mock-products";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  // Find the product by ID
  const product = mockProducts.find((product) => product.id === id);

  // If the product is not found, return a 404 error
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  // Simulate some network delay for development
  await new Promise((resolve) => setTimeout(resolve, 300));

  return NextResponse.json({ product });
}
