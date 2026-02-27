import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const ImageSlider = ({ images, autoplay = true, delay = 3000, loop = true }) => {
  const [swiper, setSwiper] = useState(null)

  useEffect(() => {
    if (swiper) {
      swiper.autoplay.start()
    }
  }, [swiper])

  return (
    <div className="w-full h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={autoplay ? { delay: delay, disableOnInteraction: false } : false}
        loop={loop}
        onSwiper={setSwiper}
        className="w-full h-full"
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
          '--swiper-pagination-bullet-inactive-color': 'rgba(255,255,255,0.3)',
          '--swiper-pagination-bullet-size': '12px',
          '--swiper-pagination-bullet-horizontal-gap': '8px'
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = `https://picsum.photos/seed/slide-${index}/1200/600.jpg`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ImageSlider
