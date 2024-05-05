import ProductCardBtn from "./ProductCardBtn"



function ProductCard({product}){
    return <>
    
    <article>
        <header>{product.name}</header>
            <img src={product.thumbnail} alt="" />
        <footer>
            <ProductCardBtn></ProductCardBtn>
        </footer>
    </article>
    </>
}

export default ProductCard