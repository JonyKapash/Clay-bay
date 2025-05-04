import { Artist } from "@/types/artist";

export const mockArtists: Artist[] = [
  {
    id: "1",
    userId: "user1",
    name: "Emma Chen",
    bio: "Specializing in minimalist ceramic designs inspired by nature.",
    profileImage:
      "https://images.pexels.com/photos/7225206/pexels-photo-7225206.jpeg",
    coverImage:
      "https://cdn.pixabay.com/photo/2013/10/16/22/38/clay-figure-196527_960_720.jpg",
    location: "Portland, OR",
    verified: true,
    featured: true,
    specialties: ["Vases", "Planters"],
    memberSince: new Date("2021-03-15"),
    rating: 4.8,
    reviewCount: 32,
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
    rating: 4.7,
    reviewCount: 27,
  },
  {
    id: "3",
    userId: "user3",
    name: "Sara Johnson",
    bio: "Contemporary ceramic artist focusing on sculptural forms.",
    profileImage:
      "https://images.pexels.com/photos/8100784/pexels-photo-8100784.jpeg",
    coverImage:
      "https://images.pexels.com/photos/2162938/pexels-photo-2162938.jpeg",
    location: "Austin, TX",
    verified: true,
    featured: true,
    specialties: ["Sculptures", "Bowls"],
    memberSince: new Date("2022-01-10"),
    rating: 4.9,
    reviewCount: 19,
  },
];
