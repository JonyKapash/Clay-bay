import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group">
      {/* Product image - larger and more prominent */}
      <div className="relative aspect-square overflow-hidden rounded-lg mb-4 bg-secondary">
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-105"
          />
        </Link>

        <button
          aria-label="Add to wishlist"
          className="absolute top-4 right-4 bg-white/80 p-2 rounded-full shadow-sm hover:bg-white transition-colors"
        >
          <Heart size={18} className="text-gray-600" />
        </button>

        {product.featured && (
          <div className="absolute top-4 left-4 bg-accent-warning px-3 py-1 rounded-full text-xs font-medium">
            Featured
          </div>
        )}
      </div>

      {/* Product info - clean and minimal */}
      <div className="px-1">
        <Link href={`/products/${product.id}`} className="block">
          <h3 className="font-medium text-base group-hover:text-primary-dark transition-colors">
            {product.title}
          </h3>
        </Link>

        <p className="text-sm text-gray-600 mt-1">
          by{" "}
          <Link
            href={`/artists/${product.artistId}`}
            className="hover:text-primary-dark"
          >
            {product.artistName}
          </Link>
        </p>

        <p className="font-medium mt-2">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
