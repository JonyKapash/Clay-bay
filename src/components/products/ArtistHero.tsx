import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Artist } from "@/types/artist";
import { Separator } from "@/components/ui/separator";

interface ArtistHeroProps {
  artist: Artist;
}

export default function ArtistHero({ artist }: ArtistHeroProps) {
  return (
    <div className="mb-12">
      {/* Cover image */}
      <div className="relative h-48 md:h-64 w-full overflow-hidden rounded-lg">
        <Image
          src={artist.coverImage || artist.profileImage}
          alt={`העבודות של ${artist.name}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
      </div>

      {/* Artist info with profile image */}
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-start md:items-end -mt-16 md:-mt-20 relative z-10">
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4 md:mb-0 md:ml-6">
            <Image
              src={artist.profileImage}
              alt={artist.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="md:pb-2">
            <div className="flex items-center">
              <h1 className="text-2xl md:text-3xl font-bold text-white md:text-text">
                {artist.name}
              </h1>
              {artist.verified && (
                <CheckCircle
                  size={20}
                  className="mr-2 text-primary-dark"
                  fill="white"
                  strokeWidth={0}
                />
              )}
            </div>
            <p className="text-white/90 md:text-gray-600">{artist.location}</p>
          </div>
        </div>

        {/* Artist bio */}
        <div className="mt-6 md:mt-8">
          <p className="text-gray-600 max-w-3xl">{artist.bio}</p>

          {/* Specialties */}
          {artist.specialties && artist.specialties.length > 0 && (
            <div className="mt-4">
              <p className="text-sm font-medium mb-2">התמחויות:</p>
              <div className="flex flex-wrap gap-2">
                {artist.specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="text-xs bg-secondary px-3 py-1 rounded-full border border-secondary-dark"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="container-wide mt-8">
        <Separator className="bg-secondary-dark/30" />
      </div>
    </div>
  );
}
