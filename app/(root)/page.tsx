import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/product/product-list";

export const metadata = {
    title: "Home",
    description: "Home page description",
}

const delay = (ms: number) =>
    new Promise(resolve => setTimeout(resolve, ms));

export default async function HomePage() {
    await delay(1000);
    return (
        <div>
            <ProductList data={sampleData.products} title="Newest Arrival" limit={4} />
        </div>
    )
}