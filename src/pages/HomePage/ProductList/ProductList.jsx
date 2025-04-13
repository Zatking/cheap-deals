import SmartphoneIcon from '@mui/icons-material/Smartphone'
import { Box, Button } from '@mui/material'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import ProductCard from '~/components/ProductCard/ProductCard'
import TabletIcon from '@mui/icons-material/Tablet'
import { NavLink } from 'react-router-dom'

function ProductList({ products }) {
  return (
    <Box sx={{ padding: 1, marginTop: 2, marginBottom: 2 }}>
      {/*  Smart Phone */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
        <Button
          component={NavLink}
          to="/smartphone"
          startIcon={<SmartphoneIcon />}
          variant="contained"
          sx={{ backgroundColor: '#f9405e' }}
        >
          Smart Phone
        </Button>
        <Button component={NavLink} to="/smartphone" variant="text" color="secondary">
          View More
        </Button>
      </Box>
      <Box>
        <Swiper spaceBetween={10} slidesPerView={2} navigation={true} modules={[Navigation]}>
          {Object.values(products?.smartphone || {}).flatMap((brandProducts) =>
            brandProducts.map((product, index) => (
              <SwiperSlide key={product.title + index}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </Box>
      {/*  Tablet */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2.5, marginBottom: 2 }}>
        <Button
          component={NavLink}
          to="/tablet"
          startIcon={<TabletIcon />}
          variant="contained"
          sx={{ backgroundColor: '#f9405e' }}
        >
          Tablet
        </Button>
        <Button component={NavLink} to="/tablet" variant="text" color="secondary">
          View More
        </Button>
      </Box>
      <Box>
        <Swiper spaceBetween={10} slidesPerView={2} navigation={true} modules={[Navigation]}>
          <Swiper spaceBetween={10} slidesPerView={2} navigation={true} modules={[Navigation]}>
            {Object.values(products?.tablet || {}).flatMap((brandProducts) =>
              brandProducts.map((product, index) => (
                <SwiperSlide key={product.title + index}>
                  <ProductCard product={product} />
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </Swiper>
      </Box>
    </Box>
  )
}

export default ProductList
