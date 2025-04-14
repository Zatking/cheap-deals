import React, { useState, useEffect } from 'react'
import { Box, Typography, IconButton, Card, CardMedia, CardContent, Checkbox } from '@mui/material'
import { Add, Remove, Delete } from '@mui/icons-material'

export default function CartItem({ product, onQuantityChange, onDelete, onSelect, selected }) {
  const [quantity, setQuantity] = useState(product.quantity || 1)

  useEffect(() => {
    onQuantityChange(quantity)
  }, [quantity])

  const handleIncrease = () => setQuantity((prev) => prev + 1)
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  return (
    <Card sx={{ display: 'flex', alignItems: 'start', p: 2, mb: 2, gap: 1 }}>
      <Checkbox
        sx={{ width: '5%', padding: 0 }}
        checked={selected}
        onChange={() => onSelect(product)} // ✅ truyền toàn bộ product
      />

      <CardMedia
        component="img"
        image={product.image || '/assets/Product/Product/Mobile Phone/Iphone/Iphone 13 mini 128GB.webp'}
        sx={{ width: '20%', height: '20%', objectFit: 'cover', borderRadius: 2 }}
      />

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', flex: 1, ml: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'start', width: '100%', justifyContent: 'space-between' }}>
          <CardContent sx={{ padding: 0 }}>
            <Typography sx={{ fontSize: '16px' }} fontWeight="bold">
              {product.title}
            </Typography>
          </CardContent>
          <IconButton color="error" onClick={onDelete}>
            <Delete />
          </IconButton>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Price: {product.price}
          </Typography>
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
