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
        <h3 className='text-sm font-semibold mb-3 mx-40'>Kategoriler</h3>
        <div className='grid grid-cols-10 mx-40 gap-3'>
          {!categories.length && "Yükleniyor"}
          {categories && categories.map((category, index) => <Category key={index} category={category} />)}
        </div>
      </div>

    </div>
  )
}
