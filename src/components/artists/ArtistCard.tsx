import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Artist } from "@/types/artist";

interface ArtistCardProps {
  artist: Artist;
}

export default function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <Link href={`/artists/${artist.id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow">
        {/* Cover image */}
        <div className="aspect-[4/3] relative overflow-hidden">
          <Image
            src={artist.coverImage || artist.profileImage}
            alt={`${artist.name}'s work`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Artist info with layered look */}
        <div className="p-5 relative -mt-12">
          <div className="flex items-center bg-white p-3 rounded-lg shadow-md border border-secondary mb-4 relative">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-secondary-light shadow-sm mr-3">
              <Image
                src={artist.profileImage}
                alt={artist.name}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <div className="flex items-center">
                <h3 className="font-medium group-hover:text-primary-dark transition-colors">
                  {artist.name}
                </h3>
                {artist.verified && (
                  <CheckCircle size={14} className="ml-1 text-primary-dark" />
                )}
              </div>
              <p className="text-sm text-gray-600">{artist.location}</p>
            </div>
          </div>

          <p className="text-sm text-gray-600 line-clamp-2 mb-3">
            {artist.bio}
          </p>

          {artist.specialties && artist.specialties.length > 0 && (
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
          )}
        </div>
      </div>
    </Link>
  );
}
