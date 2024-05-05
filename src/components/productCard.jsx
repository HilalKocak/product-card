import ProductCardBtn from "./ProductCardBtn"

function ProductCard({product}){
    return <>
    
    <article>
        <header>{product.name}</header>
            <img src={product.thumbnail} alt="" style={{width: "100%"}}/>
        <footer>
            <ProductCardBtn productId={product.id}/>
        </footer>
    </article>
    </>
}

export default ProductCard