import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import campaingData from "../api/banners.json"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"


function NextButton({ className, style, onClick }) {
  return (
    <button className='text-brand-color absolute top-1/2 -right-6 -translate-y-1/2' onClick={onClick}>
      <IoIosArrowForward size={22} />
    </button>
  )

}

function PrevButton({ className, style, onClick }) {
  return (
    <button className='text-brand-color absolute top-1/2 -left-6 -translate-y-1/2' onClick={onClick}>
      <IoIosArrowBack size={22} />
    </button >
  )

}

export default function Campaigns() {

  const [banners, setBanners] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setBanners(campaingData)
    }, 1500)
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    arrows: true,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false
        }
      }
    ]

  };
  return (
    <div className='md:py-8'>
      <div className='md:container w-full'>
        <h3 className='hidden md:block text-sm font-semibold mb-3'>Kampanyalar</h3>
        <div className='md:mb-3'>
          {!banners.length && "Yükleniyor"}
          <Slider {...settings}>
            {banners && banners.map(campaing => (
              <div key={campaing.id} className="md:px-2 ">
                <img className='md:rounded-lg ' src={campaing.image} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}
