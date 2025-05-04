"use client";

import { useEffect, useRef, useState } from "react";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";
import ProductSkeleton from "./ProductSkeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Pagination } from "@/components/ui/pagination";

interface ProductGridProps {
  products: Product[];
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  hasNextPage?: boolean;
  fetchNextPage?: () => void;
  isFetchingNextPage?: boolean;
  emptyMessage?: string;
  totalPages?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
  basePath?: string;
}

export default function ProductGrid({
  products,
  isLoading,
  isError,
  error,
  hasNextPage,
  fetchNextPage,
  isFetchingNextPage,
  emptyMessage = "לא נמצאו מוצרים.",
  totalPages = 1,
  currentPage = 1,
  onPageChange,
  basePath = "/products",
}: ProductGridProps) {
  const observerTarget = useRef<HTMLDivElement>(null);
  const [shouldUsePagination, setShouldUsePagination] = useState(true);
  const [displayProducts, setDisplayProducts] = useState<Product[]>([]);

  // Ensure we have stable display products even during loading states
  useEffect(() => {
    if (products.length > 0) {
      setDisplayProducts(products);
    }
  }, [products]);

  // Determine if we should use pagination or infinite scroll
  useEffect(() => {
    // If onPageChange is provided, we should use pagination
    // Otherwise, we'll use infinite scroll if fetchNextPage is available
    setShouldUsePagination(!!onPageChange || !fetchNextPage);
  }, [onPageChange, fetchNextPage]);

  // The handler that will be passed to the Pagination component
  const handlePageClick = (newPage: number) => {
    if (onPageChange) {
      onPageChange(newPage);
    }
  };

  // Infinite scroll implementation
  useEffect(() => {
    if (shouldUsePagination || !fetchNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          hasNextPage &&
          !isFetchingNextPage &&
          fetchNextPage
        ) {
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
  }, [hasNextPage, fetchNextPage, isFetchingNextPage, shouldUsePagination]);

  // Loading state
  if (isLoading && displayProducts.length === 0) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {Array.from({ length: 6 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    );
  }

  // Error state
  if (isError && displayProducts.length === 0) {
    return (
      <Alert variant="destructive" className="max-w-2xl mx-auto">
        <ExclamationTriangleIcon className="h-5 w-5" />
        <AlertTitle>שגיאה</AlertTitle>
        <AlertDescription>
          אופס! הייתה שגיאה בטעינת המוצרים. אל דאגה, הם יהיו כאן בקרוב.
          <br />
          <span className="text-sm opacity-70">
            {error?.message || "משהו השתבש"}
          </span>
        </AlertDescription>
      </Alert>
    );
  }

  // Empty state (only when not loading and we have no products to display)
  if (!isLoading && displayProducts.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-600">{emptyMessage}</p>
      </div>
    );
  }

  // Show either loading or the actual products
  const gridProducts = isLoading && products.length === 0 ? [] : products;

  return (
    <div className="space-y-10">
      {/* If we're loading a new page but have existing products, show loading overlay */}
      {isLoading && displayProducts.length > 0 ? (
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-8 gap-y-12 opacity-50">
            {displayProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin h-12 w-12 border-4 border-primary border-t-transparent rounded-full"></div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-8 gap-y-12">
          {gridProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Pagination or Infinite Scroll */}
      {shouldUsePagination && totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          basePath={basePath}
          onPageChange={handlePageClick}
        />
      )}

      {/* Only show infinite scroll components if we're not using pagination */}
      {!shouldUsePagination && (
        <>
          {/* Loading more indicator */}
          {isFetchingNextPage && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-8 gap-y-12 mt-12">
              {Array.from({ length: 3 }).map((_, index) => (
                <ProductSkeleton key={index} />
              ))}
            </div>
          )}

          {/* Intersection observer target */}
          {hasNextPage && <div ref={observerTarget} className="h-10 w-full" />}
        </>
      )}
    </div>
  );
}
