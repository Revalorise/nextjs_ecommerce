import ProductCard from "@/components/shared/product/product-card";
import {Product} from "@/types";

/**
 * ProductList component displays a grid of products using ProductCard component.
 * @param data - The array of products to display
 * @param title - The title of the product list
 */
export default function ProductList(
    {data, title}: { data: Product[], title?: string }
) {

    return (
        <div className="my-10">
            {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
            {data.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {data.map((product: Product) => (
                        <ProductCard key={product.slug} product={product}/>
                    ))}
                </div>
            ) : (
                <div>
                    <p>No Products Found</p>
                </div>
            )}
        </div>
    )
}