"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: "1",
    name: "Vases",
    slug: "vases",
    // Updated Vases image to cherry blossoms vase
    image:
      "https://cdn.pixabay.com/photo/2019/03/20/21/21/cherry-blossoms-4069596_1280.jpg",
  },
  {
    id: "2",
    name: "Tableware",
    slug: "tableware",
    // Updated to use Pixabay image
    image:
      "https://cdn.pixabay.com/photo/2017/11/01/17/24/ceramic-2908716_1280.jpg",
  },
  {
    id: "3",
    name: "Sculptures",
    slug: "sculptures",
    // Updated to use Pixabay image
    image:
      "https://cdn.pixabay.com/photo/2015/07/08/12/56/pigeons-836327_1280.jpg",
  },
  {
    id: "4",
    name: "Planters",
    slug: "planters",
    // Updated to use Pixabay image
    image:
      "https://cdn.pixabay.com/photo/2013/09/13/11/30/daisy-181905_1280.jpg",
  },
  {
    id: "5",
    name: "Mugs",
    slug: "mugs",
    // Updated to use Pixabay image
    image:
      "https://cdn.pixabay.com/photo/2017/05/17/17/00/cup-2321360_1280.jpg",
  },
  {
    id: "6",
    name: "Bowls",
    slug: "bowls",
    // Updated to use Pixabay image
    image:
      "https://cdn.pixabay.com/photo/2023/01/10/08/17/zoni-7709215_1280.jpg",
  },
];

export default function CategoryNav() {
  return (
    <section className="py-16 bg-white">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-medium mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of handcrafted ceramics by category and find
            the perfect piece for your space.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg shadow hover-elevate">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-xl font-medium px-2 text-center">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
