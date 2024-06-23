'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { useRouter } from 'next/navigation';
 
export type ProductProps = {
    title: string
    description: string
    price: string | number
    image?: string
    priceId: string
    productId: string
    currency: string
}

export type CurrencySymbols = {
  [key: string]: string;
  USD: string;
  EUR: string;
  GBP: string;
  SEK: string;
};

const currencySymbols: CurrencySymbols = {
  USD: "$",
  EUR: "€",
  GBP: "£",
  SEK: "kr ",
};

const getCurrencySymbol = (currencyCode: string) => {
  return currencySymbols[currencyCode.toUpperCase()] || currencyCode;
};

export function ProductCard({ title, description, price, image, priceId, productId, currency }: ProductProps) {
    const router = useRouter(); 
    const currencyDisplay  = getCurrencySymbol(currency)
    const imageFinal = image ?? "/draco.svg"

    const handlePurchaseClick = () => {
      const encodedPriceId = encodeURIComponent(priceId);
      const encodedProductId = encodeURIComponent(productId);
      router.push("/checkout?priceId=" + encodedPriceId + "&productId=" + encodedProductId);
    };

  return (
    <Card className={cn("w-full sm:w-[30rem]")}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {description}
      </CardContent>
      <Image
        src={imageFinal}
        alt={title}
        width={380}
        height={380}
        layout="responsive" 
        />
      <CardFooter>
        <Button className="w-full" onClick={handlePurchaseClick}>
          {
            currencyDisplay === currencySymbols.SEK 
            ? `Purchase for ${price} ${currencyDisplay}` 
            : `Purchase for ${currencyDisplay}${price}`
          }
        </Button>
      </CardFooter>
    </Card>
  )
}