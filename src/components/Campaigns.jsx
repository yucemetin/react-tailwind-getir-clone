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
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 1,
    autoplay: true,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />

  };
  return (
    <div className='py-8'>
      <h3 className='text-sm font-semibold mb-3 mx-40'>Kampanyalar</h3>
      <div className='mb-3 mx-40'>
        {!banners.length && "Yükleniyor"}
        <Slider {...settings}>
          {banners && banners.map(campaing => (
            <div key={campaing.id} className="px-2 ">
              <img className='rounded-lg ' src={campaing.image} />
            </div>
          ))}

        </Slider>
      </div>
    </div>
  )
}
