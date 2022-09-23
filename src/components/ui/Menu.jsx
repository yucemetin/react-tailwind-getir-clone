import React, { useState, useEffect } from 'react'
import { Collapse } from 'react-collapse'
import { useWindowWidth } from '@react-hook/window-size'
import { IoIosArrowDown } from "react-icons/io"

export default function Menu({ title, items, id }) {

    const windowWidth = useWindowWidth()
    const [isOpen, setIsOpen] = useState(true)

    useEffect(() => {
        if (isOpen && windowWidth < 768) {
            if (id !== 1) {
                setIsOpen(false)
            }
        }

        if (!isOpen && windowWidth >= 768) {
            setIsOpen(true)
        }
    }, [windowWidth])

    const toggleCollapse = () => {
        if (windowWidth <= 768) {
            setIsOpen(!isOpen)

        }

    }

    return (
        <section>
            <nav className='grid gap-y-1 md:gap-y-4'>
                <h6 onClick={toggleCollapse} className='text-lg text-primary-brand-color flex items-center justify-between'>
                    {title}
                    <button className='md:hidden grid place-items-center bg-primary-brand-color bg-opacity-10 w-6 h-6 rounded-lg'>
                        <span className={`transition-all transform ${isOpen ? 'rotate-180' : '-rotate-180'}`}>
                            <IoIosArrowDown size={14} />
                        </span>
                    </button>
                </h6>
                <Collapse className='transition-all' isOpened={isOpen}>
                    <nav>
                        <ul className="grid gap-y-1 md:gap-y-2">
                            {items.map((item, key) => (
                                <li key={key}>
                                    <a href="#" className='text-sm hover:text-brand-color'>
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </Collapse>

            </nav>
        </section>
    )
}
