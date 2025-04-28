import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts} from "@/lib/actions/product.action";

export const metadata = {
    title: "Home",
    description: "Home page description",
}

const delay = (ms: number) =>
    new Promise(resolve => setTimeout(resolve, ms));

export default async function HomePage() {
    const latestProducts = await getLatestProducts();
    await delay(1000);
    return (
        <div>
            <ProductList data={latestProducts} title="Newest Arrival" />
        </div>
    )
}