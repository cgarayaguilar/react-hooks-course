import React, { useContext } from 'react'
import Product from './Product'
import '../styles/components/Products.css'
import AppContext from '../context/AppProvider'

const Products = ({ products }) => {
  const { state, addToCart } = useContext(AppContext)
  const { products } = state

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map(product => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  )
}

export default Products
