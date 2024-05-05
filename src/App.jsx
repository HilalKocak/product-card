import { useState, useEffect } from 'react'
import ImgNotSelected from './components/ImgNotSelected'
ImgNotSelected
import ImgContainer from './components/ImgContainer'


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

  return (
    <>
      <main className='container'>
        {
          activeProduct ? <h1>{activeProduct.name}</h1> : <ImgNotSelected/>
        }
        <ImgContainer products={products}></ImgContainer>
      </main>
    </>
  )
}
 
export default App
