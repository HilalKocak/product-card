import { useState, useEffect } from 'react'
import ImgNotSelected from './components/imgNotSelected'
import ImgContainer from './components/imgContainer'

function App() {
  const [products, setProducts] = useState([])
  const [isActiveProduct, setIsActiveProduct] = useState(false)

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
          isActiveProduct ? <></> : <ImgNotSelected/>
        }
        <ImgContainer products={products}></ImgContainer>
      </main>
    </>
  )
}
 
export default App
