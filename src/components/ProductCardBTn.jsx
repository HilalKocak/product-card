const ProductCardBtn = ({productId, handleProductSelect}) => {
    return <>
    <button className="outline" style={{width: "100%"}} onClick={() => handleProductSelect(productId)}>Select {productId}</button>
    </>
}
export default ProductCardBtn