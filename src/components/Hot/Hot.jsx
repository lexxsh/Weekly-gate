import React from 'react'
import { FaFire } from 'react-icons/fa'
import './Hot.css'
import HotCard from './HotCard'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const Hot = () => {
  const settings = {
    dots: true,

    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="Hot-container">
      <div className="Hot-Title">
        <FaFire
          style={{ color: '#ff6a6a', fontSize: '50px', marginRight: '10px' }}
        />
        Hot Sections
      </div>
      <Slider {...settings}>
        <HotCard />
        <HotCard />
        <HotCard />
      </Slider>
    </div>
  )
}

export default Hot
