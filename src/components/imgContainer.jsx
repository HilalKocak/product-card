import ProductCard from "./productCard";

export default function ImgContainer({products}) {
    return <>
    <div className="grid">
        {products.filter(
            product => product.isAvailable
        )
        .map(product => <ProductCard product={product} key={product.id}></ProductCard>)}
    </div>    
    
    </>
}