import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  brand: string;
  model: string;
  color: string;
  category: string;
  discount: number;
};

export default function Product({ product }: { product: Product }) {
  const discountedPrice = product?.price * (1 - product?.discount / 100);

  return (
    <Card className="w-full max-w-sm overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative w-full py-4">
          <div className="flex items-center justify-center">
            <img
              width={200}
              height={200}
              src={product?.image}
              alt={product?.title}
              className="transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
          {product?.discount > 0 && (
            <Badge className="absolute bg-red-500 top-2 right-2">
              {product?.discount}% OFF
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="py-4">
        <CardTitle className="text-lg font-semibold line-clamp-1">
          {product?.title}
        </CardTitle>
        <CardDescription className="mt-1 text-sm text-muted-foreground">
          {product?.model}
        </CardDescription>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-2xl font-bold">
            $
            {product?.discount > 0
              ? discountedPrice.toFixed(2)
              : product?.price}
          </span>
          {product?.discount > 0 && (
            <span className="text-sm line-through text-muted-foreground">
              ${product?.price}
            </span>
          )}
        </div>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {product?.description}
        </p>
        <div className="flex items-center gap-2 mt-2">
          <Badge variant="secondary">{product?.category}</Badge>
          <Badge variant="outline" className="text-primary">
            {product?.color}
          </Badge>
        </div>
      </CardContent>
      <CardFooter>
        <Button>
          <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
