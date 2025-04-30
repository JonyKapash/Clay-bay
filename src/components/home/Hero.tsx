import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen max-h-[800px] w-full overflow-hidden">
      {/* Background with subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10"></div>

      {/* Updated hero image with Pixabay image */}
      <Image
        src="https://cdn.pixabay.com/photo/2019/11/18/20/35/sound-4635713_1280.jpg"
        alt="Ceramic pottery collection"
        fill
        style={{ objectFit: "cover" }}
        priority
        className="object-center"
      />

      <div className="container-wide h-full flex flex-col justify-center relative z-20 text-white">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 leading-tight">
            <span className="font-bold">Ceramics</span> <br />
            Handcrafted with Love
          </h1>

          <p className="text-lg md:text-xl mb-8 text-white/90">
            Discover unique ceramic pieces created by talented artists from
            around the world.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/products"
              className="bg-white text-primary-dark hover:bg-white/90 px-8 py-4 rounded-full font-medium transition-all inline-flex items-center"
            >
              Shop Collection <ArrowRight size={18} className="ml-2" />
            </Link>

            <Link
              href="/artists"
              className="bg-transparent border border-white hover:bg-white/10 px-8 py-4 rounded-full font-medium transition-all"
            >
              Meet the Artists
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
