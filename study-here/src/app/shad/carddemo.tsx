import { BellRing, Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type ProductCardProps = {
  title: string;
  description: string;
};

export function ProductCard({ title, description }: ProductCardProps) {
  return (
    <Card className={cn("w-[380px]")}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          Purchase 
        </Button>
      </CardFooter>
    </Card>
  )
}
