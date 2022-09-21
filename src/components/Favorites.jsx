import React, { useEffect, useState } from 'react'
import productData from "../api/product.json"
import ProductItem from './ui/ProductItem';

export default function Favorites() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    setTimeout(() => {
      setProducts(productData)
    }, 1500);

  }, [])
  return (
    <div className='mb-3 mx-40'>
      <h3 className='text-sm font-semibold mb-5'>Favoriler</h3>
      <div className='grid grid-cols-8 gap-0.1 rounded-lg overflow-hidden'>
        {!products.length && "Yükleniyor"}
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
