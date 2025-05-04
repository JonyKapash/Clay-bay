"use client";

import { useProduct, useArtistProducts } from "@/lib/api-hooks";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Heart, ShoppingBag, Info } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ProductCard from "@/components/products/ProductCard";

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const [selectedImage, setSelectedImage] = useState(0);

  // Fetch the product
  const { data, isLoading, isError, error } = useProduct(params.id);

  // If we have a product, fetch related products by the same artist
  const { data: artistProductsData, isLoading: isLoadingRelated } =
    useArtistProducts(
      data?.product?.artistId || "",
      4 // Limit to 4 related products
    );

  // Filter out the current product from related products
  const relatedProducts =
    artistProductsData?.pages[0]?.products.filter(
      (product) => product.id !== params.id
    ) || [];

  // Loading state
  if (isLoading) {
    return (
      <div className="container-wide py-16 mt-16">
        <div className="w-full max-w-6xl mx-auto animate-pulse">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Product gallery skeleton */}
            <div className="w-full lg:w-1/2">
              <div className="h-96 lg:h-[500px] bg-secondary-light rounded-lg"></div>
              <div className="flex gap-4 mt-4">
                {[1, 2, 3].map((_, i) => (
                  <div
                    key={i}
                    className="w-24 h-24 bg-secondary-light rounded-lg"
                  ></div>
                ))}
              </div>
            </div>

            {/* Product info skeleton */}
            <div className="w-full lg:w-1/2">
              <div className="h-8 w-3/4 bg-secondary-light rounded-md mb-4"></div>
              <div className="h-4 w-1/3 bg-secondary-light rounded-md mb-8"></div>
              <div className="h-6 w-1/4 bg-secondary-light rounded-md mb-6"></div>
              <div className="h-24 w-full bg-secondary-light rounded-md mb-6"></div>
              <div className="h-12 w-full bg-secondary-light rounded-md mb-6"></div>
              <div className="h-12 w-full bg-secondary-light rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (isError) {
    return (
      <div className="container-wide py-16 mt-16">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-8 text-center">
            <Info className="w-16 h-16 text-accent-error mx-auto mb-6" />
            <h2 className="text-2xl font-medium mb-2">
              Oops! Something went wrong
            </h2>
            <p className="text-gray-600 mb-6">
              {error instanceof Error
                ? error.message
                : "Failed to load product"}
            </p>
            <Button asChild variant="default">
              <Link href="/products">
                <ArrowLeft size={16} className="mr-2" />
                Back to All Products
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Make sure data exists
  if (!data || !data.product) {
    return (
      <div className="container-wide py-16 mt-16">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-8 text-center">
            <Info className="w-16 h-16 text-accent-error mx-auto mb-6" />
            <h2 className="text-2xl font-medium mb-2">Product Not Found</h2>
            <p className="text-gray-600 mb-6">
              We couldn't find the product you're looking for.
            </p>
            <Button asChild variant="default">
              <Link href="/products">
                <ArrowLeft size={16} className="mr-2" />
                Back to All Products
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const product = data.product;

  return (
    <div className="container-wide py-12 mt-12">
      {/* Back button */}
      <Button variant="ghost" size="sm" className="mb-8" asChild>
        <Link href={`/products/artist/${product.artistId}`}>
          <ArrowLeft size={16} className="mr-2" />
          Back to Artist Products
        </Link>
      </Button>

      <div className="flex flex-col lg:flex-row gap-12 mb-16">
        {/* Product gallery */}
        <div className="w-full lg:w-1/2">
          {/* Main image */}
          <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary mb-4">
            <Image
              src={product.images[selectedImage] || product.images[0]}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            {product.featured && (
              <Badge
                variant="secondary"
                className="absolute top-4 left-4 bg-accent-warning text-text"
              >
                Featured
              </Badge>
            )}
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-4 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`relative w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? "border-primary"
                      : "border-transparent hover:border-primary/50"
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image}
                    alt={`${product.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product info */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-medium mb-2">{product.title}</h1>
          <p className="text-gray-600 mb-6">
            by{" "}
            <Link
              href={`/products/artist/${product.artistId}`}
              className="text-primary-dark hover:underline"
            >
              {product.artistName}
            </Link>
          </p>

          <p className="text-2xl font-medium mb-6">
            ${product.price.toFixed(2)}
          </p>

          <div className="prose max-w-full mb-8">
            <p>{product.description}</p>
          </div>

          {/* Product details */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-3">Details</h3>
            <div className="grid grid-cols-2 gap-y-2 text-sm">
              <div className="text-gray-600">Category</div>
              <div>{product.category}</div>

              {product.material && (
                <>
                  <div className="text-gray-600">Material</div>
                  <div>{product.material.join(", ")}</div>
                </>
              )}

              {product.technique && (
                <>
                  <div className="text-gray-600">Technique</div>
                  <div>{product.technique.join(", ")}</div>
                </>
              )}

              {product.dimensions && (
                <>
                  <div className="text-gray-600">Dimensions</div>
                  <div>
                    {product.dimensions.height} × {product.dimensions.width}
                    {product.dimensions.depth
                      ? ` × ${product.dimensions.depth}`
                      : ""}{" "}
                    {product.dimensions.unit}
                  </div>
                </>
              )}

              {product.weight && (
                <>
                  <div className="text-gray-600">Weight</div>
                  <div>
                    {product.weight.value} {product.weight.unit}
                  </div>
                </>
              )}

              <div className="text-gray-600">In Stock</div>
              <div>{product.inStock ? "Yes" : "No"}</div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col space-y-4">
            <Button className="w-full bg-primary hover:bg-primary-dark text-white">
              <ShoppingBag size={18} className="mr-2" />
              Add to Cart
            </Button>

            <Button variant="outline" className="w-full border-gray-300">
              <Heart size={18} className="mr-2" />
              Add to Wishlist
            </Button>
          </div>
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <Separator className="mb-8" />

          <h2 className="text-2xl font-medium mb-8">
            More by {product.artistName}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.slice(0, 4).map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href={`/products/artist/${product.artistId}`}>
                View All Products by {product.artistName}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
