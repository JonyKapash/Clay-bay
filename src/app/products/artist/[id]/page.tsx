"use client";

import { useArtistProducts } from "@/lib/api-hooks";
import ArtistHero from "@/components/products/ArtistHero";
import ProductGrid from "@/components/products/ProductGrid";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Artist } from "@/types/artist";

// Hebrew translations for artists
const hebrewArtistNames: Record<string, Partial<Artist>> = {
  "1": {
    name: "אמה חן",
    bio: "מתמחה בעיצובים קרמיים מינימליסטיים בהשראת הטבע.",
    location: "פורטלנד, אורגון",
    specialties: ["אגרטלים", "עציצים"],
  },
  "2": {
    name: "דוד קים",
    bio: "יוצר כלי קרמיקה פונקציונליים עם זיגוג בהשראה אסייתית.",
    location: "סיאטל, וושינגטון",
    specialties: ["ספלים", "כלי שולחן"],
  },
  "3": {
    name: "שרה ג'ונסון",
    bio: "אמנית קרמיקה עכשווית המתמקדת בצורות פיסוליות.",
    location: "אוסטין, טקסס",
    specialties: ["פסלים", "קערות"],
  },
};

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

  // State for localized artist data
  const [localizedArtist, setLocalizedArtist] = useState<Artist | null>(null);

  // Extract artist and products from the data
  const artist = data?.pages[0]?.artist;
  const products = data?.pages.flatMap((page) => page.products) || [];

  // Update artist with Hebrew translations when data is loaded
  useEffect(() => {
    if (artist && hebrewArtistNames[artist.id]) {
      setLocalizedArtist({
        ...artist,
        ...hebrewArtistNames[artist.id],
      });
    } else if (artist) {
      setLocalizedArtist(artist);
    }
  }, [artist]);

  // If there's an artist but no products
  const hasArtistButNoProducts =
    localizedArtist && products.length === 0 && !isLoading && !isError;

  return (
    <div className="bg-white">
      {/* Back button */}
      <div className="container-wide pt-24 pb-6">
        <Button variant="ghost" size="sm" className="mb-4" asChild>
          <Link href="/artists">
            <ArrowRight size={16} className="ml-2" />
            חזרה לכל האמנים
          </Link>
        </Button>
      </div>

      {/* Artist hero section - only shown if we have artist data or still loading */}
      {(localizedArtist || (isLoading && !isError)) &&
        (localizedArtist ? (
          <ArtistHero artist={localizedArtist} />
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
              ? `ל${localizedArtist?.name} אין עדיין מוצרים. בדקו שוב מאוחר יותר!`
              : "לא נמצאו מוצרים."
          }
        />
      </div>
    </div>
  );
}
