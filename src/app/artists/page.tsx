"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ArtistCard from "@/components/artists/ArtistCard";

// Mock data for artists - Using the same data as on the home page
const artists = [
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
  {
    id: "4",
    userId: "user4",
    name: "יעקב לוי",
    bio: "אומן קרמיקה המתמחה בכלים מסורתיים בשילוב טכניקות מודרניות.",
    profileImage:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    coverImage:
      "https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg",
    location: "תל אביב, ישראל",
    verified: false,
    featured: false,
    specialties: ["קדרות", "כלי אירוח"],
    memberSince: new Date("2021-05-20"),
  },
  {
    id: "5",
    userId: "user5",
    name: "רחל כהן",
    bio: "יוצרת קרמיקה מודרנית עם דגש על צבעוניות ייחודית וטקסטורות מעניינות.",
    profileImage:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    coverImage:
      "https://images.pexels.com/photos/2747446/pexels-photo-2747446.jpeg",
    location: "חיפה, ישראל",
    verified: true,
    featured: false,
    specialties: ["אגרטלים", "פסלים"],
    memberSince: new Date("2022-02-15"),
  },
  {
    id: "6",
    userId: "user6",
    name: "אבי גולדשטיין",
    bio: "בעל ניסיון של 20 שנה ביצירת קרמיקה פונקציונלית בסגנון מסורתי.",
    profileImage:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    coverImage:
      "https://images.pexels.com/photos/2170387/pexels-photo-2170387.jpeg",
    location: "ירושלים, ישראל",
    verified: true,
    featured: false,
    specialties: ["כלי שולחן", "מכלים"],
    memberSince: new Date("2019-11-01"),
  },
];

export default function ArtistsPage() {
  return (
    <div className="bg-white">
      <div className="container-wide pt-24 pb-12">
        {/* Back button */}
        <Button variant="ghost" size="sm" className="mb-8" asChild>
          <Link href="/">
            <ArrowRight size={16} className="ml-2" />
            חזרה לדף הבית
          </Link>
        </Button>

        {/* Page header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-medium mb-4">האמנים שלנו</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            הכירו את האמנים המוכשרים העומדים מאחורי היצירות הקרמיות הייחודיות
            שלנו.
          </p>
        </div>

        {/* Artists grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </div>
    </div>
  );
}
