import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import ProductCard from '~/components/ProductCard/ProductCard'
import Box from '@mui/material/Box'
import HeaderHotSale from './HeaderHotSale/HeaderHotSale'
import HotSaleCountDown from './HeaderHotSale/HotSaleCountDown'
import { Typography } from '@mui/material'

function HotSale({ hotsale }) {
  const target = new Date()
  target.setDate(target.getDate() + hotsale.daySale)

  return (
    <Box sx={{ bgcolor: '#f9405e', padding: 1, borderRadius: 2, marginTop: '80px' }}>
      <HeaderHotSale></HeaderHotSale>
      <HotSaleCountDown targetDate={target}></HotSaleCountDown>
      <Box sx={{ marginTop: '20px' }}>
        <Swiper
          spaceBetween={15}
          slidesPerView={2}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {hotsale?.productSale?.map((product, index) => {
            return (
              <SwiperSlide key={index}>
                <ProductCard product={product} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Box>
    </Box>
  )
}

export default HotSale
