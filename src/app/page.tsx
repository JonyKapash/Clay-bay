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
      <section className="py-16 bg-secondary-light">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-16 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.pexels.com/photos/3094035/pexels-photo-3094035.jpeg"
                alt="Ceramicist working on pottery"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-medium mb-6">
                Handcrafted with Passion
              </h2>
              <p className="mb-6 text-gray-600">
                Every piece in our marketplace is handcrafted by skilled
                artisans who pour their heart and soul into their work. From
                throwing the clay on the wheel to the final glaze firing, each
                step is done with meticulous attention to detail.
              </p>
              <p className="mb-6 text-gray-600">
                By supporting these artists, you're not just buying a beautiful
                object—you're investing in craftsmanship, tradition, and the
                future of ceramic arts.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-medium text-lg mb-2">Sustainable</h3>
                  <p className="text-sm text-gray-600">
                    Eco-friendly practices and materials in all our pieces.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-medium text-lg mb-2">Handmade</h3>
                  <p className="text-sm text-gray-600">
                    Crafted with love and attention to every detail.
                  </p>
                </div>
              </div>

              <Link
                href="/about"
                className="btn-primary inline-flex items-center px-6 py-3 rounded-full"
              >
                Our Story <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artists */}
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
      <section className="py-12 bg-secondary-light">
        <div className="container-wide">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-medium">Follow Our Journey</h2>
            <p className="text-gray-600">@claybay_ceramics</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {/* Updated the first gallery image */}
            <div className="aspect-square relative rounded-lg overflow-hidden hover-elevate">
              <Image
                src="https://images.pexels.com/photos/5606020/pexels-photo-5606020.jpeg"
                alt="Gallery ceramic image"
                fill
                className="object-cover"
              />
            </div>
            {/* Keep the remaining gallery images */}
            {[2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square relative rounded-lg overflow-hidden hover-elevate"
              >
                <Image
                  src={`https://images.pexels.com/photos/${
                    4990000 + i
                  }/pexels-photo-${4990000 + i}.jpeg`}
                  alt="Gallery image"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
