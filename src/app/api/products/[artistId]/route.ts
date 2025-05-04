import { NextRequest, NextResponse } from "next/server";
import { mockProducts } from "@/data/mock-products";
import { mockArtists } from "@/data/mock-artists";

export async function GET(
  request: NextRequest,
  { params }: { params: { artistId: string } }
) {
  const { artistId } = params;
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "9");

  // First, validate if the artist exists
  const artistExists = mockArtists.some((artist) => artist.id === artistId);

  if (!artistExists) {
    return NextResponse.json({ error: "Artist not found" }, { status: 404 });
  }

  // Filter products by artist ID
  const artistProducts = mockProducts.filter(
    (product) => product.artistId === artistId
  );

  // Sort by createdAt, newest first
  const sortedProducts = [...artistProducts].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  // Calculate offset for pagination
  const offset = (page - 1) * limit;

  // Paginate products
  const paginatedProducts = sortedProducts.slice(offset, offset + limit);

  // Simulate some network delay for development
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Find the artist information to return
  const artist = mockArtists.find((artist) => artist.id === artistId);

  return NextResponse.json({
    products: paginatedProducts,
    artist,
    pagination: {
      page,
      limit,
      total: artistProducts.length,
      totalPages: Math.ceil(artistProducts.length / limit),
      hasMore: offset + limit < artistProducts.length,
    },
  });
}
