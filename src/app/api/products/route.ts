import { NextRequest, NextResponse } from "next/server";
import { mockProducts } from "@/data/mock-products";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "9");

  // Calculate offset for pagination
  const offset = (page - 1) * limit;

  // Sort products by createdAt, newest first
  const sortedProducts = [...mockProducts].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  // Paginate products
  const paginatedProducts = sortedProducts.slice(offset, offset + limit);

  // Simulate some network delay for development
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json({
    products: paginatedProducts,
    pagination: {
      page,
      limit,
      total: mockProducts.length,
      totalPages: Math.ceil(mockProducts.length / limit),
      hasMore: offset + limit < mockProducts.length,
    },
  });
}
