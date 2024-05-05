import { useState, useEffect } from 'react'

import ImgContainer from './components/ImgContainer'
import ImgNotSelected from './components/ImgNotSelected'


function App() {
  const [products, setProducts] = useState([])
  const [activeProduct, setActiveProduct] = useState(false)

  useEffect(() => {
    fetch("./src/data/products.json")
    .then(res => res.json())
    .then(data => {
      if(data && data.products){
        const activeProducts = data.products.filter(product => product.isActive)
        setProducts(activeProducts)
      }
      
    })
  }, [])
  function handleProductSelect(productId) {
    const updatedProducts = products.map(product => {
      if (product.id === productId) {
        return { ...product, isActive: true }; 
      } else {
        return { ...product, isActive: false }; 
      }
    });
  
    const selectedProduct = updatedProducts.find(product => product.id === productId);
    setActiveProduct(selectedProduct); 
    setProducts(updatedProducts); 
  }
  return (
    <>
      <main className='container'>
        {
          activeProduct ? <h1>
            <img src={activeProduct.imgName} alt="" style={{width: "100%"}}/>
          </h1> : <ImgNotSelected/>
        }
        <ImgContainer products={products} 
        handleProductSelect = {handleProductSelect}>

        </ImgContainer>
      </main>
    </>
  )
}
 
export default App
