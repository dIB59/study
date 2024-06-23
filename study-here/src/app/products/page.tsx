import { ProductCard, ProductProps } from "@/components/ui/custom/ProductCard";
import Stripe from "stripe";
  
type ProductWithPrice = {
    productId: string;
    priceId: string | null;
    name: string;
    description: string | null;
    image: string | null;
    price: number | null;
    currency: string | null;
    createdAt: number;
};

const consolidateData = (products: Stripe.Product[], prices: Stripe.Price[]): ProductWithPrice[] => {
    
    return products.map((product) => {

        const price = !product.default_price
            ? prices.find((price) => price.product === product.id)
            : prices.find((price) => price.id === product.default_price);
  
      return {
        productId: product.id,
        priceId: price ? price.id : null,
        name: product.name,
        description: product.description,
        image: product.images.length > 0 ? product.images[0] : null,
        price: price ? price.unit_amount : null,
        currency: price ? price.currency : null,
        createdAt: product.created,
      };
    });
  };

export default async function Page() {

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
        apiVersion: "2024-04-10",
    });

    const [products, prices] = await Promise.all([
        stripe.products.list({ active: true }),
        stripe.prices.list({ active: true }),
    ]);

    const productWithPrice = consolidateData(products.data, prices.data);
    
    const productsProps: ProductProps[] = productWithPrice.map((product) => {
        return {
            title: product.name,
            description: product.description ?? "Product Description",
            price: product.price ? (product.price / 100) : "N/A",
            image: product.image ?? "draco.svg",
            priceId: product.priceId ?? "N/A",
            productId: product.productId,
            currency: product.currency ?? " ",
        };
    });

    return (
        <div className="flex flex-col items-center gap-4 p-4">
            <div className="flex flex-wrap justify-center gap-4">
                {productsProps.map((product) => (
                    <div key={product.productId} >
                        <ProductCard {...product} />
                    </div>
                ))}
            </div>
        </div>
    );
}