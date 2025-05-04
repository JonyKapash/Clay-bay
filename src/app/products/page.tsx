"use client";

import { useProducts } from "@/lib/api-hooks";
import ProductGrid from "@/components/products/ProductGrid";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";

export default function ProductsPage() {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useProducts();

  // Flatten the pages of products from the infinite query
  const products = data?.pages.flatMap((page) => page.products) || [];

  return (
    <div className="bg-white">
      <div className="container-wide py-12">
        {/* Page header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-medium mb-4">
            Our Collection
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked selection of beautiful ceramic pieces that
            showcase the artistry and craftsmanship of our talented makers.
          </p>
        </div>

        <Separator className="mb-12" />

        {/* Explore artists CTA */}
        <div className="rounded-lg bg-secondary p-6 mb-12 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-xl font-medium mb-2">
              Looking for a specific artist?
            </h2>
            <p className="text-gray-600">
              Discover unique ceramic pieces created by talented artists from
              around the world.
            </p>
          </div>
          <Button
            variant="default"
            className="mt-4 md:mt-0 bg-primary text-white hover:bg-primary-dark"
            asChild
          >
            <a href="/artists">
              Explore Artists <ArrowRight size={16} className="ml-2" />
            </a>
          </Button>
        </div>

        {/* Products grid */}
        <ProductGrid
          products={products}
          isLoading={isLoading}
          isError={isError}
          error={error as Error}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
      </div>
    </div>
  );
}
