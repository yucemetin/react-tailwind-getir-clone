import React, { useEffect, useState } from 'react'
import categoryData from "../api/categories.json"
import Category from './ui/Category'

export default function Categories() {

  const [categories, setCategories] = useState([])

  useEffect(() => {

    setTimeout(() => setCategories(categoryData), 1500)

  }, [])
  return (
    <div className='bg-white py-4 w-full'>
      <div className='container'>
        <h3 className='text-sm font-semibold mb-3'>Kategoriler</h3>
        <div className='grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12 gap-3'>
          {!categories.length && "Yükleniyor"}
          {categories && categories.map((category, index) => <Category key={index} category={category} />)}
        </div>
      </div>

    </div>
  )
}
