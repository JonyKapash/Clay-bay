import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductSkeleton() {
  return (
    <Card className="overflow-hidden border-secondary-dark/20">
      <CardContent className="p-0">
        <AspectRatio ratio={1 / 1} className="bg-secondary-light">
          <Skeleton className="h-full w-full" />
        </AspectRatio>
      </CardContent>

      <CardFooter className="flex flex-col items-start p-4 space-y-2">
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/4 mt-1" />
      </CardFooter>
    </Card>
  );
}
