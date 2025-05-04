import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/home/Hero";
import CategoryNav from "@/components/home/CategoryNav";
import ProductCard from "@/components/products/ProductCard";
import ArtistCard from "@/components/artists/ArtistCard";
import Newsletter from "@/components/home/Newsletter";
import { ArrowRight } from "lucide-react";

// Mock data for featured products - Updated with Pexels images
const featuredProducts = [
  {
    id: "1",
    title: "Minimalist Ceramic Vase",
    description: "A handcrafted minimalist vase perfect for any modern home.",
    price: 89.99,
    images: [
      "https://images.pexels.com/photos/2162938/pexels-photo-2162938.jpeg",
    ],
    category: "vases",
    artistId: "1",
    artistName: "Emma Chen",
    createdAt: new Date(),
    inStock: true,
    featured: true,
  },
  {
    id: "2",
    title: "Stoneware Coffee Mug Set",
    description: "Set of 2 handmade coffee mugs with natural glaze.",
    price: 49.99,
    images: [
      "https://images.pexels.com/photos/3020919/pexels-photo-3020919.jpeg",
    ],
    category: "mugs",
    artistId: "2",
    artistName: "David Kim",
    createdAt: new Date(),
    inStock: true,
    featured: true,
  },
  {
    id: "4",
    title: "Modern Ceramic Planter",
    description: "Contemporary design planter perfect for succulents.",
    price: 59.99,
    images: [
      "https://images.pexels.com/photos/1084188/pexels-photo-1084188.jpeg",
    ],
    category: "planters",
    artistId: "1",
    artistName: "Emma Chen",
    createdAt: new Date(),
    inStock: true,
    featured: false,
  },
];

// Mock data for featured artists - Updated with improved images
const featuredArtists = [
  {
    id: "1",
    userId: "user1",
    name: "Emma Chen",
    bio: "Specializing in minimalist ceramic designs inspired by nature.",
    // Updated Emma's profile image to better match a ceramicist
    profileImage:
      "https://images.pexels.com/photos/7225206/pexels-photo-7225206.jpeg",
    coverImage:
      "https://cdn.pixabay.com/photo/2013/10/16/22/38/clay-figure-196527_960_720.jpg",
    location: "Portland, OR",
    verified: true,
    featured: true,
    specialties: ["Vases", "Planters"],
    memberSince: new Date("2021-03-15"),
  },
  {
    id: "2",
    userId: "user2",
    name: "David Kim",
    bio: "Creating functional pottery with Asian-inspired glazes.",
    profileImage:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    coverImage:
      "https://images.pexels.com/photos/1493926/pexels-photo-1493926.jpeg",
    location: "Seattle, WA",
    verified: true,
    featured: true,
    specialties: ["Mugs", "Tableware"],
    memberSince: new Date("2020-11-22"),
  },
  {
    id: "3",
    userId: "user3",
    name: "Sara Johnson",
    bio: "Contemporary ceramic artist focusing on sculptural forms.",
    // Updated Sara's profile image to better match a ceramicist
    profileImage:
      "https://images.pexels.com/photos/8100784/pexels-photo-8100784.jpeg",
    coverImage:
      "https://images.pexels.com/photos/2162938/pexels-photo-2162938.jpeg",
    location: "Austin, TX",
    verified: true,
    featured: true,
    specialties: ["Sculptures", "Bowls"],
    memberSince: new Date("2022-01-10"),
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Featured Collection - Yaar-inspired section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-medium mb-4">
              Featured Collection
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our handpicked selection of beautiful ceramic pieces that
              showcase the artistry and craftsmanship of our talented makers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="btn-primary inline-flex items-center px-6 py-3 rounded-full"
            >
              View All Products <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories section - More visual approach */}
      <CategoryNav />

      {/* Our Values section - Similar to Yaar's about section */}
      <section className="py-16 bg-secondary">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-medium mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At ClayBay, we believe in supporting artists, promoting
              sustainable craftsmanship, and bringing beautiful handmade
              ceramics into your everyday life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm hover-elevate">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-4 mx-auto">
                <Image
                  src="/icons/community.svg"
                  alt="Community"
                  width={28}
                  height={28}
                />
              </div>
              <h3 className="text-lg font-medium text-center mb-2">
                Artist Community
              </h3>
              <p className="text-gray-600 text-center">
                We support a thriving community of ceramic artists, providing
                them with a platform to showcase and sell their unique
                creations.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm hover-elevate">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-4 mx-auto">
                <Image
                  src="/icons/sustainability.svg"
                  alt="Sustainability"
                  width={28}
                  height={28}
                />
              </div>
              <h3 className="text-lg font-medium text-center mb-2">
                Sustainable Practices
              </h3>
              <p className="text-gray-600 text-center">
                We're committed to environmentally friendly practices,
                sustainable materials, and reducing waste in ceramic production.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm hover-elevate">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-4 mx-auto">
                <Image
                  src="/icons/handcrafted.svg"
                  alt="Handcrafted"
                  width={28}
                  height={28}
                />
              </div>
              <h3 className="text-lg font-medium text-center mb-2">
                Handcrafted Quality
              </h3>
              <p className="text-gray-600 text-center">
                Every piece in our collection is carefully handcrafted with
                attention to detail, ensuring quality and uniqueness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured artists section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-medium mb-4">
              Meet Our Ceramic Artists
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the talented makers behind our beautiful collection of
              handcrafted ceramics.
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
              View All Artists <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram-like gallery section - Updated first image */}
      <section className="py-16 bg-white border-t border-secondary-dark">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-medium mb-4">
              #CeramicLife
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow us on Instagram @claybay and tag your photos with
              #CeramicLife to be featured in our gallery.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {/* Gallery images */}
            <div className="relative aspect-square overflow-hidden group">
              <Image
                src="https://images.pexels.com/photos/3094033/pexels-photo-3094033.jpeg"
                alt="Ceramic gallery"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-medium">@emma_chen</p>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden group">
              <Image
                src="https://images.pexels.com/photos/4992463/pexels-photo-4992463.jpeg"
                alt="Ceramic gallery"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-medium">@clay_studio</p>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden group">
              <Image
                src="https://images.pexels.com/photos/3094035/pexels-photo-3094035.jpeg"
                alt="Ceramic gallery"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-medium">@pottery_life</p>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden group">
              <Image
                src="https://images.pexels.com/photos/4993325/pexels-photo-4993325.jpeg"
                alt="Ceramic gallery"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-medium">@david_kim</p>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden group">
              <Image
                src="https://images.pexels.com/photos/4992651/pexels-photo-4992651.jpeg"
                alt="Ceramic gallery"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-medium">@ceramic_dreams</p>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden group">
              <Image
                src="https://images.pexels.com/photos/4993347/pexels-photo-4993347.jpeg"
                alt="Ceramic gallery"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-medium">@sara_johnson</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-dark hover:text-primary font-medium"
            >
              View more on Instagram <ArrowRight size={16} className="inline" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter section */}
      <Newsletter />
    </>
  );
}
