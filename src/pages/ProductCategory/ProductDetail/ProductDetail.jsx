import React from 'react'
import NavBar from '~/components/NavBar/NavBar'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import SupportService from '~/components/SupportService/SupportService'
import { CheckCircle, LocalOffer, Payment, CardGiftcard, LocalPhone, Movie } from '@mui/icons-material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import Button from '@mui/material/Button'
import { useLocation } from 'react-router-dom'
function ProductDetail() {
  const location = useLocation()

  const product = location.state?.product

  return (
    <Box>
      <NavBar></NavBar>
      <Box sx={{ width: '96%', marginTop: '68px', marginX: 'auto', marginBottom: 2.5 }}>
        <img
          src={product?.image}
          alt="iPhone"
          style={{ width: '100%', borderRadius: '15px', border: '1px solid #ccc' }}
        />

        {/*  Special offer */}
        <Box sx={{ color: '#f9405e', marginTop: 2, borderRadius: '15px', border: '1px solid #f9405e' }}>
          <Box
            sx={{
              color: '#f9405e',
              padding: 1.5,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              bgcolor: '#fee2e2',
              borderRadius: '15px'
            }}
          >
            <svg height="26" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                fill=" #f9405e"
                d="M152 0H154.2C186.1 0 215.7 16.91 231.9 44.45L256 85.46L280.1 44.45C296.3 16.91 325.9 0 357.8 0H360C408.6 0 448 39.4 448 88C448 102.4 444.5 115.1 438.4 128H480C497.7 128 512 142.3 512 160V224C512 241.7 497.7 256 480 256H32C14.33 256 0 241.7 0 224V160C0 142.3 14.33 128 32 128H73.6C67.46 115.1 64 102.4 64 88C64 39.4 103.4 0 152 0zM190.5 68.78C182.9 55.91 169.1 48 154.2 48H152C129.9 48 112 65.91 112 88C112 110.1 129.9 128 152 128H225.3L190.5 68.78zM360 48H357.8C342.9 48 329.1 55.91 321.5 68.78L286.7 128H360C382.1 128 400 110.1 400 88C400 65.91 382.1 48 360 48V48zM32 288H224V512H80C53.49 512 32 490.5 32 464V288zM288 512V288H480V464C480 490.5 458.5 512 432 512H288z"
              ></path>
            </svg>
            <Typography variant="h5" component="div">
              Promotion
            </Typography>
          </Box>

          <Box sx={{ padding: 2, paddingTop: 0 }}>
            <Box sx={{ marginTop: 2, display: 'flex', alignItems: 'center' }}>
              <LocalPhone sx={{ fontSize: 30, marginRight: 1 }} />
              <Typography variant="body1" component="span">
                Free 12-month 4G/5G network access with unlimited calls.
              </Typography>
            </Box>

            <Box sx={{ marginTop: 2, display: 'flex', alignItems: 'center' }}>
              <Movie sx={{ fontSize: 30, marginRight: 1 }} />
              <Typography variant="body1" component="span">
                Free subscription to Netflix for 6 months for new users.
              </Typography>
            </Box>

            <Box sx={{ marginTop: 2, display: 'flex', alignItems: 'center' }}>
              <LocalOffer sx={{ fontSize: 30, marginRight: 1 }} />
              <Typography variant="body1" component="span">
                Free international calling package for 3 months.
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* Product detail */}
        <Box sx={{ marginTop: 2, padding: 2, borderRadius: '15px', border: '1px solid #ccc' }}>
          <Typography variant="h5" gutterBottom>
            Product Detail
          </Typography>

          <Box sx={{ marginTop: 2, display: 'flex', alignItems: 'center' }}>
            <CheckCircle sx={{ fontSize: 30, marginRight: 1 }} />
            <Typography variant="body1" component="span">
              Brand New 100% Genuine Product
            </Typography>
          </Box>

          <Box sx={{ marginTop: 2, display: 'flex', alignItems: 'center' }}>
            <Payment sx={{ fontSize: 30, marginRight: 1 }} />
            <Typography variant="body1" component="span">
              Price includes VAT 10%.
            </Typography>
          </Box>

          <Box sx={{ marginTop: 2, display: 'flex', alignItems: 'center' }}>
            <LocalOffer sx={{ fontSize: 30, marginRight: 1 }} />
            <Typography variant="body1" component="span">
              12-month warranty at authorized service centers.
            </Typography>
          </Box>

          <Box sx={{ marginTop: 2, display: 'flex', alignItems: 'center' }}>
            <CardGiftcard sx={{ fontSize: 30, marginRight: 1 }} />
            <Typography variant="body1" component="span">
              Free gift: Protective case and fast charger.
            </Typography>
          </Box>
        </Box>

        {/*  Buy and add cart */}
        <Box sx={{ marginTop: 2, marginBottom: 15, display: 'flex', justifyContent: 'space-between' }}>
          <Button sx={{ display: 'flex', flexDirection: 'column', bgcolor: '#f9405e', color: '#fff', flexGrow: 2 }}>
            <Typography sx={{ fontSize: 18 }}>{product?.price}</Typography>
            <Typography variant="h5">Buy Now</Typography>
          </Button>
          <Button variant="outlined" sx={{ color: '#f9405e', borderColor: '#f9405e', flexGrow: 1, marginLeft: 2 }}>
            <AddShoppingCartIcon></AddShoppingCartIcon>
          </Button>
        </Box>
      </Box>

      {/* support service */}
      <Box sx={{ bottom: '20%' }}>
        <SupportService></SupportService>
      </Box>
    </Box>
  )
}

export default ProductDetail
