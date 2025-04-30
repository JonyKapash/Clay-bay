export interface Artist {
  id: string;
  userId: string;
  name: string;
  bio: string;
  profileImage: string;
  coverImage?: string;
  location: string;
  website?: string;
  socialMedia?: {
    instagram?: string;
    twitter?: string;
    facebook?: string;
    pinterest?: string;
  };
  verified: boolean;
  featured?: boolean;
  specialties?: string[];
  education?: string[];
  exhibitions?: Array<{
    title: string;
    location: string;
    year: number;
    description?: string;
  }>;
  rating?: number;
  reviewCount?: number;
  memberSince: Date;
  story?: string;
}
