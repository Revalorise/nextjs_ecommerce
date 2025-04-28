export default function ProductList({ data, title, limit }: { data: any, title?: string, limit?: number}) {

    const productsToShow = limit ? data.slice(0, limit) : data;

    return (
        <div className="my-10">
            {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
            { data.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {productsToShow.map((product: any) => (
                        <div key={product.id}>
                            {product.name}
                        </div>
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