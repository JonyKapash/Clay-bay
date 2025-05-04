"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Hero from "@/components/home/Hero";
import ArtistCard from "@/components/artists/ArtistCard";
import ProductGrid from "@/components/products/ProductGrid";
import { useProducts } from "@/lib/api-hooks";
import { Button } from "@/components/ui/button";

// Mock data for featured artists - Updated with improved images
const featuredArtists = [
  {
    id: "1",
    userId: "user1",
    name: "אמה חן",
    bio: "מתמחה בעיצובים קרמיים מינימליסטיים בהשראת הטבע.",
    profileImage:
      "https://images.pexels.com/photos/7225206/pexels-photo-7225206.jpeg",
    coverImage:
      "https://cdn.pixabay.com/photo/2013/10/16/22/38/clay-figure-196527_960_720.jpg",
    location: "פורטלנד, אורגון",
    verified: true,
    featured: true,
    specialties: ["אגרטלים", "עציצים"],
    memberSince: new Date("2021-03-15"),
  },
  {
    id: "2",
    userId: "user2",
    name: "דוד קים",
    bio: "יוצר כלי קרמיקה פונקציונליים עם זיגוג בהשראה אסייתית.",
    profileImage:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    coverImage:
      "https://images.pexels.com/photos/1493926/pexels-photo-1493926.jpeg",
    location: "סיאטל, וושינגטון",
    verified: true,
    featured: true,
    specialties: ["ספלים", "כלי שולחן"],
    memberSince: new Date("2020-11-22"),
  },
  {
    id: "3",
    userId: "user3",
    name: "שרה ג'ונסון",
    bio: "אמנית קרמיקה עכשווית המתמקדת בצורות פיסוליות.",
    profileImage:
      "https://images.pexels.com/photos/8100784/pexels-photo-8100784.jpeg",
    coverImage:
      "https://images.pexels.com/photos/2162938/pexels-photo-2162938.jpeg",
    location: "אוסטין, טקסס",
    verified: true,
    featured: true,
    specialties: ["פסלים", "קערות"],
    memberSince: new Date("2022-01-10"),
  },
];

export default function Home() {
  const PRODUCTS_TO_SHOW = 6; // Show a fixed number of products on the homepage

  // Use React Query to fetch products
  const { data, isLoading, isError, error } = useProducts();

  // Get featured products for the homepage
  const featuredProducts =
    data?.pages[0]?.products.slice(0, PRODUCTS_TO_SHOW) || [];

  return (
    <>
      <Hero />

      {/* Featured Artists Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-medium mb-4">
              האמנים שלנו
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              גלו את האמנים המוכשרים העומדים מאחורי האוסף היפה שלנו של קרמיקה
              בעבודת יד.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArtists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/artists"
              className="btn-secondary inline-flex items-center px-6 py-3 rounded-full border border-primary"
            >
              כל האמנים <ArrowLeft size={16} className="me-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-secondary-light">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-medium mb-4">
              המוצרים שלנו
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              עיינו באוסף הקרמיקה המגוון שלנו וגלו יצירות ייחודיות של האמנים
              המוכשרים שלנו.
            </p>
          </div>

          {/* Products Grid - Without pagination */}
          <ProductGrid
            products={featuredProducts}
            isLoading={isLoading}
            isError={isError}
            error={error as Error}
            emptyMessage="לא נמצאו מוצרים כרגע. אנא בדקו שוב בקרוב!"
          />

          {/* View All Products Button */}
          <div className="text-center mt-12">
            <Button
              asChild
              variant="default"
              className="px-6 py-3 rounded-full bg-primary text-white hover:bg-primary-dark inline-flex items-center"
            >
              <Link href="/products?page=1">
                לכל המוצרים בחנות <ArrowLeft size={16} className="me-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
