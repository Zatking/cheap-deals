import React, { useState } from 'react'
import { Box, Typography, IconButton, Button, Radio, Card, CardMedia, CardContent, Checkbox } from '@mui/material'
import { Add, Remove, Delete } from '@mui/icons-material'

export default function CartItem({ product }) {
  const [quantity, setQuantity] = useState(1)
  const [selected, setSelected] = useState(false)

  const handleIncrease = () => setQuantity((prev) => prev + 1)
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  return (
    <Card sx={{ display: 'flex', alignItems: 'start', p: 2, mb: 2 }}>
      {/* Radio chọn sản phẩm */}
      <Checkbox sx={{ width: '5%', padding: 0 }} checked={selected} onChange={() => setSelected(!selected)} />

      <CardMedia
        component="img"
        image="/assets/Product/Product/Mobile Phone/Iphone/Iphone 13 mini 128GB.webp"
        sx={{ width: '20%', height: '20%', objectFit: 'cover', borderRadius: 2 }}
      />

      {/* Nội dung sản phẩm */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          flex: 1,
          ml: 1
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'start' }}>
          <CardContent sx={{ padding: 0 }}>
            <Typography sx={{ fontSize: '16px' }} fontWeight="bold">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </Typography>
          </CardContent>{' '}
          <IconButton color="error" onClick={() => alert('Xóa sản phẩm')}>
            <Delete />
          </IconButton>
        </Box>

        {/* Nút xóa */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          {/* Giá nằm dưới */}
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Price: {(122222 * quantity).toLocaleString()}₫
          </Typography>
          {/* Nút tăng/giảm số lượng */}
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
            <IconButton size="small" onClick={handleDecrease}>
              <Remove />
            </IconButton>
            <Typography variant="body1" sx={{ mx: 1 }}>
              {quantity}
            </Typography>
            <IconButton size="small" onClick={handleIncrease}>
              <Add />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Card>
  )
}
