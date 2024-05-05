import ProductCard from "./ProductCard"
export default function ImgContainer({products, handleProductSelect}) {
    return <>
    <div className="grid">
        {products.filter(
            product => product.isAvailable
        )
        .map(product => <ProductCard handleProductSelect= {handleProductSelect} product={product} key={product.id}></ProductCard>)}
    </div>    
    
    </>
}