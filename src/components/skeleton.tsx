import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ShoppingCart } from "lucide-react";

export default function ProductSkeleton() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-0">
        <div className="relative w-full p-2">
          <div className="flex items-center justify-center">
            <Skeleton className="w-[200px] h-[200px]" />
          </div>
          <div className="absolute bg-muted top-2 right-2">
            <Skeleton className="w-12 h-4" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="py-4">
        <Skeleton className="w-3/4 h-6 mb-2" />
        <Skeleton className="w-1/2 h-4 mb-3" />
        <div className="flex items-baseline gap-2 mt-2">
          <Skeleton className="w-20 h-8" />
          <Skeleton className="w-16 h-4" />
        </div>
        <Skeleton className="w-full h-4 mt-2" />
        <Skeleton className="w-5/6 h-4 mt-1" />
        <div className="flex items-center gap-2 mt-2">
          <Skeleton className="w-20 h-6" />
          <Skeleton className="w-16 h-6" />
        </div>
      </CardContent>
      <CardFooter>
        <Button disabled>
          <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
