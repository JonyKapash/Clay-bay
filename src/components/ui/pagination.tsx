import React from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
  onPageChange?: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  basePath,
  onPageChange,
}: PaginationProps) {
  // Generate an array of page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      // If we have less than the max pages to show, display all
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      // Ensure we always show 3 pages in the middle section
      if (endPage - startPage < 2) {
        if (startPage === 2) {
          endPage = Math.min(totalPages - 1, startPage + 2);
        } else if (endPage === totalPages - 1) {
          startPage = Math.max(2, endPage - 2);
        }
      }

      // Add ellipsis after first page if needed
      if (startPage > 2) {
        pages.push("...");
      }

      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      // Add ellipsis before last page if needed
      if (endPage < totalPages - 1) {
        pages.push("...");
      }

      // Always show last page
      pages.push(totalPages);
    }

    return pages;
  };

  // Don't render pagination if there's only one page
  if (totalPages <= 1) return null;

  return (
    <div
      className="flex justify-center items-center gap-2 mt-8 text-center"
      data-rtl-reverse="true"
    >
      {/* Previous button */}
      <button
        className={cn(
          "flex items-center justify-center rounded-md p-2 border transition-colors",
          currentPage > 1
            ? "hover:bg-gray-100 cursor-pointer"
            : "text-gray-300 cursor-not-allowed"
        )}
        onClick={(e) => {
          e.preventDefault();
          if (currentPage > 1 && onPageChange) {
            onPageChange(currentPage - 1);
          }
        }}
        disabled={currentPage <= 1}
        aria-label="Previous page"
        type="button"
      >
        <ChevronRight className="h-4 w-4 rtl-flip" />
      </button>

      {/* Page numbers */}
      {getPageNumbers().map((page, index) => {
        if (page === "...") {
          return (
            <span
              key={`ellipsis-${index}`}
              className="px-3 py-1"
              aria-hidden="true"
            >
              ...
            </span>
          );
        }

        const pageNum = page as number;
        return (
          <button
            key={pageNum}
            className={cn(
              "w-8 h-8 flex items-center justify-center rounded-md border transition-colors",
              pageNum === currentPage
                ? "bg-primary text-white"
                : "hover:bg-gray-100"
            )}
            onClick={(e) => {
              e.preventDefault();
              if (onPageChange) {
                onPageChange(pageNum);
              }
            }}
            aria-label={`Go to page ${pageNum}`}
            aria-current={pageNum === currentPage ? "page" : undefined}
            type="button"
          >
            {pageNum}
          </button>
        );
      })}

      {/* Next button */}
      <button
        className={cn(
          "flex items-center justify-center rounded-md p-2 border transition-colors",
          currentPage < totalPages
            ? "hover:bg-gray-100 cursor-pointer"
            : "text-gray-300 cursor-not-allowed"
        )}
        onClick={(e) => {
          e.preventDefault();
          if (currentPage < totalPages && onPageChange) {
            onPageChange(currentPage + 1);
          }
        }}
        disabled={currentPage >= totalPages}
        aria-label="Next page"
        type="button"
      >
        <ChevronLeft className="h-4 w-4 rtl-flip" />
      </button>
    </div>
  );
}
