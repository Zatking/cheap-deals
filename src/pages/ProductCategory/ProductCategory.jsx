import { Box, Button, Typography } from '@mui/material'
import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import NavBar from '~/components/NavBar/NavBar'
import ProductCard from '~/components/ProductCard/ProductCard'
import SupportService from '~/components/SupportService/SupportService'

function ProductCategory() {
  // State category (smartphone or tablet)
  const [category, setCategory] = useState('Smart Phone') // 'smartphone' or 'tablet'

  // Fake data for smartphone and tablet brands with logos
  const smartphoneBrands = [
    {
      name: 'Apple',
      logo: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:90/plain/https://cellphones.com.vn/media/tmp/catalog/product/t/_/t_i_xu_ng_71_.png'
    },
    {
      name: 'Samsung',
      logo: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:90/plain/https://cellphones.com.vn/media/tmp/catalog/product/t/_/t_i_xu_ng_72_.png'
    },
    {
      name: 'Oppo',
      logo: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:90/plain/https://cellphones.com.vn/media/tmp/catalog/product/t/_/t_i_xu_ng_74_.png'
    },
    {
      name: 'Vivo',
      logo: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:90/plain/https://cellphones.com.vn/media/tmp/catalog/product/t/_/t_i_xu_ng_78_.png'
    }
  ]

  const tabletBrands = [
    {
      name: 'Apple',
      logo: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:90/plain/https://cellphones.com.vn/media/tmp/catalog/product/t/_/t_i_xu_ng_71_.png'
    },
    {
      name: 'Samsung',
      logo: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:90/plain/https://cellphones.com.vn/media/tmp/catalog/product/t/_/t_i_xu_ng_72_.png'
    },
    {
      name: 'Lenovo',
      logo: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:90/plain/https://cellphones.com.vn/media/tmp/catalog/product/t/_/t_i_xu_ng_85_.png'
    },
    {
      name: 'HUAWEI',
      logo: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:50/q:90/plain/https://cellphones.com.vn/media/icons/brands/brand-418.svg'
    }
  ]

  return (
    <>
      <NavBar />
      {/* product brands */}
      <Box sx={{ width: '96%', marginTop: '64px', marginX: 'auto', marginBottom: 2.5 }}>
        <Typography variant="h6" sx={{ fontWeight: '600' }}>
          {category}
        </Typography>

        <Box>
          <Swiper spaceBetween={10} slidesPerView="auto">
            {(category === 'Smart Phone' ? smartphoneBrands : tabletBrands).map((brand, index) => (
              <SwiperSlide key={index} style={{ width: 'fit-content' }}>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 1,
                    gap: 1
                  }}
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    style={{
                      width: 90,
                      height: '22px',
                      objectFit: 'contain'
                    }}
                  />
                </Button>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>

      {/* products  */}
      <Box
        sx={{
          width: '96%',
          marginY: 0,
          marginX: 'auto',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2
        }}
      >
        {[...Array(7)].map((_, i) => (
          <Box key={i} sx={{ width: '47%' }}>
            <ProductCard />
          </Box>
        ))}
      </Box>

      {/* support service */}
      <SupportService></SupportService>
    </>
  )
}

export default ProductCategory
