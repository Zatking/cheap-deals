import SmartphoneIcon from '@mui/icons-material/Smartphone'
import { Box, Button } from '@mui/material'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import ProductCard from '~/components/ProductCard/ProductCard'
import TabletIcon from '@mui/icons-material/Tablet'

function ProductList() {
  return (
    <Box sx={{ padding: 1, marginTop: 2, marginBottom: 2 }}>
      {/*  Smart Phone */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
        <Button startIcon={<SmartphoneIcon />} variant="contained" sx={{ backgroundColor: '#f9405e' }}>
          Smart Phone
        </Button>
        <Button variant="text" color="secondary">
          View More
        </Button>
      </Box>
      <Box>
        <Swiper spaceBetween={10} slidesPerView={2} navigation={true} modules={[Navigation]}>
          {[...Array(10)].map((_, index) => (
            <SwiperSlide key={index}>
              <ProductCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      {/*  Tablet */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2.5, marginBottom: 2 }}>
        <Button startIcon={<TabletIcon />} variant="contained" sx={{ backgroundColor: '#f9405e' }}>
          Tablet
        </Button>
        <Button variant="text" color="secondary">
          View More
        </Button>
      </Box>
      <Box>
        <Swiper spaceBetween={10} slidesPerView={2} navigation={true} modules={[Navigation]}>
          {[...Array(10)].map((_, index) => (
            <SwiperSlide key={index}>
              <ProductCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  )
}

export default ProductList
