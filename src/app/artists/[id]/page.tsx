"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ArtistDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();

  // Redirect to the actual artist products page
  useEffect(() => {
    router.push(`/products/artist/${params.id}`);
  }, [router, params.id]);

  // Show loading state while redirecting
  return (
    <div className="container-wide py-16 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
        <p className="text-gray-600">טוען...</p>
      </div>
    </div>
  );
}
