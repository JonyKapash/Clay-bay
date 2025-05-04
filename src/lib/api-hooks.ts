import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { Artist } from "@/types/artist";
import { Product } from "@/types/product";

interface PaginationResponse {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasMore: boolean;
}

interface ProductsResponse {
  products: Product[];
  pagination: PaginationResponse;
}

interface ArtistProductsResponse extends ProductsResponse {
  artist: Artist;
}

interface ProductResponse {
  product: Product;
}

// Fetch a single product by ID
export function useProduct(productId: string) {
  return useQuery({
    queryKey: ["product", productId],
    queryFn: async () => {
      // In a real app, this would call an API endpoint
      // For now, we'll use the mock data directly
      const response = await fetch(`/api/products/product/${productId}`);

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Product not found");
        }
        throw new Error("Failed to fetch product");
      }

      return response.json() as Promise<ProductResponse>;
    },
    enabled: !!productId,
  });
}

// Fetch all products with pagination
export function useProducts(initialLimit: number = 9) {
  return useInfiniteQuery({
    queryKey: ["products"],
    queryFn: async ({ pageParam = 1 }) => {
      const limit = pageParam === 1 ? initialLimit : 6; // First page 9 items, then 6
      const response = await fetch(
        `/api/products?page=${pageParam}&limit=${limit}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      return response.json() as Promise<ProductsResponse>;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.pagination.hasMore
        ? lastPage.pagination.page + 1
        : undefined;
    },
  });
}

// Fetch products by artist ID with pagination
export function useArtistProducts(artistId: string, initialLimit: number = 9) {
  return useInfiniteQuery({
    queryKey: ["products", "artist", artistId],
    queryFn: async ({ pageParam = 1 }) => {
      const limit = pageParam === 1 ? initialLimit : 6; // First page 9 items, then 6
      const response = await fetch(
        `/api/products/${artistId}?page=${pageParam}&limit=${limit}`
      );

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Artist not found");
        }
        throw new Error("Failed to fetch products");
      }

      return response.json() as Promise<ArtistProductsResponse>;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.pagination.hasMore
        ? lastPage.pagination.page + 1
        : undefined;
    },
  });
}
