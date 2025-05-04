import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Product } from "@/types/product";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden border-secondary-dark/20 hover:shadow-md transition-all duration-300">
      <CardContent className="p-0">
        {/* Product image */}
        <div className="relative">
          <AspectRatio ratio={1 / 1} className="bg-secondary">
            <Link href={`/products/${product.id}`}>
              <Image
                src={product.images[0]}
                alt={product.title}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105"
              />
            </Link>
          </AspectRatio>

          <button
            aria-label="הוסף למועדפים"
            className="absolute top-4 left-4 bg-white/80 p-2 rounded-full shadow-sm hover:bg-white transition-colors"
          >
            <Heart size={18} className="text-gray-600" />
          </button>

          {product.featured && (
            <Badge
              variant="secondary"
              className="absolute top-4 right-4 bg-accent-warning text-text"
            >
              מומלץ
            </Badge>
          )}
        </div>
      </CardContent>

      {/* Product info */}
      <CardFooter className="flex flex-col items-start p-4">
        <Link href={`/products/${product.id}`} className="block w-full">
          <h3 className="font-medium text-base group-hover:text-primary-dark transition-colors">
            {product.title}
          </h3>
        </Link>

        <p className="text-sm text-gray-600 mt-1 w-full">
          מאת{" "}
          <Link
            href={`/products/artist/${product.artistId}`}
            className="hover:text-primary-dark"
          >
            {product.artistName}
          </Link>
        </p>

        <p className="font-medium mt-2">{product.price.toFixed(2)} ₪</p>
      </CardFooter>
    </Card>
  );
}
