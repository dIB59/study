import {ProductCard} from "@/app/shad/carddemo"
import { title } from "process"

const product = {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
}


export default function Page() {
  return (
    <ProductCard
        title = "Example Product"
        description = "This is an example description for the product."
      />
  )
}