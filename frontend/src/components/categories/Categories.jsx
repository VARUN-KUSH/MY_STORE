import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Categories = () => {

  const [products, setProducts] = useState([]);
  let fetchdata

  useEffect(() => {
    ;(fetchdata = async() => {
      try {
          const response = await fetch("https://fakestoreapi.com/products")
          const data = await response.json()
          console.log(data)
          setProducts(data)

      }
       catch (error) {
          console.log("error in fetching" + error )
      }
     
  })()
  }, [])
  return (
    <div>

      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
            </Link>
          </li>
        ))}
      </ul>
        
        
    </div>
  )
}

export default Categories