import { useState, useEffect } from 'react'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("./src/data/products.json").then(res => res.json()).then(res => setProducts(res.data))
  }, [])

  return (
    <>
      <main className='container'>
        {products.map(product => <div key={product.id}>{product.name}</div>)}
      </main>
    </>
  )
}

export default App
