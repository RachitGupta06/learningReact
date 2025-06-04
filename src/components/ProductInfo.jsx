import React from 'react'

const ProductInfo = () => {
    const product = {
        name: "Laptop",
        price: 999.99,
        description: "A high-performance laptop for all your computing needs.",
        inStock: true
    }
  return (
    <h1>
        Name: {product.name} <br />
        Price: ${product.price} <br />  
        Description: {product.description} <br />
        In Stock: {product.inStock ? "Yes" : "No"}
    </h1>
  )
}

export default ProductInfo