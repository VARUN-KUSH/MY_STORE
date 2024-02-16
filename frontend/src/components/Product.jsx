import React from 'react'

const Product = () => {
    const datafetch = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json)) 
    }
  return (
    <div>
        
        <h1>Products</h1>
        
        <button onClick={datafetch}>clickme</button>
        
        </div>
  )
}

export default Product
