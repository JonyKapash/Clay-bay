"use client";

import { useEffect, useRef } from "react";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";
import ProductSkeleton from "./ProductSkeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface ProductGridProps {
  products: Product[];
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  hasNextPage?: boolean;
  fetchNextPage: () => void;
  isFetchingNextPage: boolean;
  emptyMessage?: string;
}

export default function ProductGrid({
  products,
  isLoading,
  isError,
  error,
  hasNextPage,
  fetchNextPage,
  isFetchingNextPage,
  emptyMessage = "No products found.",
}: ProductGridProps) {
  const observerTarget = useRef<HTMLDivElement>(null);

  // Infinite scroll implementation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [hasNextPage, fetchNextPage, isFetchingNextPage]);

  // Loading state
  if (isLoading && !isFetchingNextPage) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {Array.from({ length: 9 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    );
  }

  // Error state
  if (isError && !products.length) {
    return (
      <Alert variant="destructive" className="max-w-2xl mx-auto">
        <ExclamationTriangleIcon className="h-5 w-5" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Oops! We had an error loading the products. Don&apos;t worry,
          they&apos;ll be here shortly.
          <br />
          <span className="text-sm opacity-70">
            {error?.message || "Something went wrong"}
          </span>
        </AlertDescription>
      </Alert>
    );
  }

  // Empty state
  if (!isLoading && !isError && products.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-600">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Loading more indicator */}
      {isFetchingNextPage && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-12">
          {Array.from({ length: 3 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      )}

      {/* Intersection observer target */}
      {hasNextPage && <div ref={observerTarget} className="h-10 w-full" />}
    </div>
  );
}
