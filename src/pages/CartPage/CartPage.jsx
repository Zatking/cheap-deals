import { Box, Button, Typography, Checkbox } from '@mui/material'
import React from 'react'
import CartItem from './CartItem/CartItem'
import NavBar from '~/components/NavBar/NavBar'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
function CartPage() {
  return (
    <Box>
      <NavBar></NavBar>

      <Box
        sx={{
          position: 'relative',
          marginTop: '62px',
          marginX: 'auto',
          marginBottom: 2,
          bgcolor: '#f8f8f8',
          height: 48, // chiều cao cố định
          display: 'flex',
          alignItems: 'center',
          px: 2
        }}
      >
        {/* Icon Back bên trái */}
        <Button
          sx={{
            color: 'black',
            minWidth: 'unset',
            padding: 0
          }}
        >
          <KeyboardBackspaceIcon />
        </Button>

        {/* Tiêu đề ở giữa màn hình */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: '600',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        >
          Your Cart
        </Typography>
      </Box>

      <Box sx={{ width: '92%', marginX: 'auto', paddingBottom: 12 }}>
        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>
      </Box>
      <Box
        sx={{
          bgcolor: 'white',
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 -1px 2px  rgba(0, 0, 0, 0.1)',
            p: 2
          }}
        >
          <Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Checkbox
                sx={{
                  p: 0
                }}
              ></Checkbox>
              <Typography>Select All</Typography>
            </Box>
            <Typography sx={{ color: '#f9405e' }}> Total: 1244253đ</Typography>
          </Box>
          <Typography variant="body1"></Typography>
          <Button variant="contained" sx={{ bgcolor: '#f9405e' }}>
            Buy now
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default CartPage
