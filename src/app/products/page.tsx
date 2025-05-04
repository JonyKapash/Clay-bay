"use client";

import { useProducts } from "@/lib/api-hooks";
import ProductGrid from "@/components/products/ProductGrid";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const urlPage = Number(searchParams.get("page") || "1");
  const [currentPage, setCurrentPage] = useState(urlPage);
  const PRODUCTS_PER_PAGE = 6; // 6 products per page for better grid layout

  // Sync with URL when it changes externally
  useEffect(() => {
    setCurrentPage(urlPage);
  }, [urlPage]);

  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useProducts();

  // Pre-fetch all data needed for correct pagination
  useEffect(() => {
    // Calculate how many API pages we need to load to show the requested UI page
    const pagesLoaded = data?.pages?.length || 0;
    const pagesNeeded = Math.ceil((currentPage * PRODUCTS_PER_PAGE) / 12); // Assuming API returns 12 items per page

    // Fetch necessary pages
    const fetchPages = async () => {
      if (pagesNeeded > pagesLoaded && hasNextPage && !isFetchingNextPage) {
        await fetchNextPage();
      }
    };

    fetchPages();
  }, [
    data?.pages,
    currentPage,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  ]);

  // Flatten the pages of products from the infinite query
  const allProducts = data?.pages.flatMap((page) => page.products) || [];

  const totalProducts = data?.pages[0]?.pagination?.total || allProducts.length;
  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

  // Get products for the current page (client-side pagination)
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const currentPageProducts = allProducts.slice(startIndex, endIndex);

  // Loading state for new pages
  const isPagingLoading =
    (currentPage > 1 &&
      currentPageProducts.length === 0 &&
      allProducts.length > 0) ||
    isLoading ||
    isFetchingNextPage;

  // Use useCallback to ensure the function doesn't change on every render
  const handlePageChange = useCallback((newPage: number) => {
    // Update internal state
    setCurrentPage(newPage);

    // Update URL without triggering navigation event
    const url = new URL(window.location.href);
    url.searchParams.set("page", newPage.toString());
    window.history.pushState({ page: newPage }, "", url.toString());

    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <div className="container-wide pt-24 pb-12">
        {/* Page header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-medium mb-4">האוסף שלנו</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            עיינו בבחירה שלנו של יצירות קרמיקה יפות המציגות את האמנות והמיומנות
            של היוצרים המוכשרים שלנו.
          </p>
        </div>

        <Separator className="mb-12" />

        {/* Explore artists CTA */}
        <div className="rounded-lg bg-secondary p-6 mb-12 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-xl font-medium mb-2">מחפשים אמן ספציפי?</h2>
            <p className="text-gray-600">
              גלו יצירות קרמיקה ייחודיות שנוצרו על ידי אמנים מוכשרים מכל העולם.
            </p>
          </div>
          <Button
            variant="default"
            className="mt-4 md:mt-0 bg-primary text-white hover:bg-primary-dark"
            asChild
          >
            <a href="/artists">
              לגלות אמנים <ArrowLeft size={16} className="me-2" />
            </a>
          </Button>
        </div>

        {/* Products grid */}
        <ProductGrid
          products={currentPageProducts}
          isLoading={isPagingLoading}
          isError={isError}
          error={error as Error}
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          basePath="/products"
          emptyMessage="לא נמצאו מוצרים. אנא נסו שוב מאוחר יותר."
        />
      </div>
    </div>
  );
}
