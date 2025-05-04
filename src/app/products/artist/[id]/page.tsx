"use client";

import { useArtistProducts } from "@/lib/api-hooks";
import ArtistHero from "@/components/products/ArtistHero";
import ProductGrid from "@/components/products/ProductGrid";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface ArtistProductsPageProps {
  params: {
    id: string;
  };
}

export default function ArtistProductsPage({
  params: { id },
}: ArtistProductsPageProps) {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useArtistProducts(id);

  // Extract artist and products from the data
  const artist = data?.pages[0]?.artist;
  const products = data?.pages.flatMap((page) => page.products) || [];

  // If there's an artist but no products
  const hasArtistButNoProducts =
    artist && products.length === 0 && !isLoading && !isError;

  return (
    <div className="bg-white">
      {/* Back button */}
      <div className="container-wide pt-6">
        <Button variant="ghost" size="sm" className="mb-4" asChild>
          <Link href="/products">
            <ArrowLeft size={16} className="mr-2" />
            Back to All Products
          </Link>
        </Button>
      </div>

      {/* Artist hero section - only shown if we have artist data or still loading */}
      {(artist || (isLoading && !isError)) &&
        (artist ? (
          <ArtistHero artist={artist} />
        ) : (
          <div className="h-64 bg-secondary-light animate-pulse rounded-lg mb-12"></div>
        ))}

      <div className="container-wide py-8">
        {/* Products grid */}
        <ProductGrid
          products={products}
          isLoading={isLoading}
          isError={isError}
          error={error as Error}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
          isFetchingNextPage={isFetchingNextPage}
          emptyMessage={
            hasArtistButNoProducts
              ? `${artist.name} doesn't have any products yet. Check back later!`
              : "No products found."
          }
        />
      </div>
    </div>
  );
}
