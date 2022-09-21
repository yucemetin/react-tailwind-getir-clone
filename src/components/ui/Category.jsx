import React from 'react'

export default function Category({ category: { id, title, image } }) {
    return (
        <a href="#" className='flex flex-col gap-y-2 items-center text-center p-4 transition hover:bg-purple-50 hover:text-primary-brand-color'>
            <img src={image} alt={title} className="h-12 w-12 rounded border border-gray-200" />
            <span className='text-sm font-semibold tracking-tight whitespace-nowrap'>{title}</span>
        </a>

    )
}
