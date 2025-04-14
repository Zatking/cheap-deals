import { Box, Button, Typography, Checkbox } from '@mui/material'
import React from 'react'
import CartItem from './CartItem/CartItem'
import NavBar from '~/components/NavBar/NavBar'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
function CartPage() {
  const [cartItems, setCartItems] = useState([])
  const [selectedItems, setSelectedItems] = useState([])

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || []
    setCartItems(storedCart)
  }, [])

  const handleQuantityChange = (index, newQuantity) => {
    const updatedItems = [...cartItems]
    updatedItems[index].quantity = newQuantity
    setCartItems(updatedItems)
    localStorage.setItem('cart', JSON.stringify(updatedItems))
  }

  const handleDelete = (index) => {
    const updatedItems = [...cartItems]
    updatedItems.splice(index, 1)
    setCartItems(updatedItems)
    localStorage.setItem('cart', JSON.stringify(updatedItems))

    // Xóa khỏi danh sách selected nếu đã chọn
    setSelectedItems((prev) => prev.filter((id) => id !== cartItems[index].id))
  }

  const handleSelectItem = (product) => {
    const isSelected = selectedItems.some((item) => item.title === product.title)
    if (isSelected) {
      setSelectedItems((prev) => prev.filter((item) => item.title !== product.title))
    } else {
      setSelectedItems((prev) => [...prev, product])
    }
  }

  const handleSelectAll = () => {
    if (selectedItems.length === cartItems.length) {
      setSelectedItems([])
    } else {
      setSelectedItems(cartItems) // ✅ lưu cả object
    }
  }

  const totalPrice = cartItems.reduce((total, item) => {
    const isSelected = selectedItems.some((selected) => selected.title === item.title)
    if (isSelected) {
      const numericPrice = parseFloat(item.price.replace('£', '').replace(',', ''))
      return total + numericPrice * item.quantity
    }
    return total
  }, 0)

  const navigate = useNavigate()
  return (
    <Box>
      <NavBar></NavBar>
      {/* navigator */}
      <Box
        sx={{
          position: 'relative',
          marginTop: '62px',
          marginX: 'auto',
          marginBottom: 2,
          bgcolor: '#f8f8f8',
          height: 48,
          display: 'flex',
          alignItems: 'center',
          px: 2
        }}
      >
        {/* Icon Back bên trái */}
        <Button
          onClick={() => navigate(-1)}
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
        {cartItems.length === 0 ? (
          <h3 style={{ textAlign: 'center', marginTop: 50 }}>The cart is empty</h3>
        ) : (
          cartItems.map((item, index) => (
            <CartItem
              key={item.id}
              product={item}
              onQuantityChange={(newQuantity) => handleQuantityChange(index, newQuantity)}
              onDelete={() => handleDelete(index)}
              onSelect={() => handleSelectItem(item)}
              selected={selectedItems.some((selected) => selected.title === item.title)} // ✅
            />
          ))
        )}
      </Box>

      {/* buy now */}
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
            boxShadow: '0 -1px 2px rgba(0, 0, 0, 0.1)',
            p: 2
          }}
        >
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Checkbox
                sx={{ p: 0 }}
                checked={selectedItems.length === cartItems.length && cartItems.length > 0}
                onChange={handleSelectAll}
              />
              <Typography>Select All</Typography>
            </Box>
            <Typography sx={{ color: '#f9405e' }}>
              Total: £{totalPrice.toLocaleString('en-UK', { minimumFractionDigits: 2 })}
            </Typography>
          </Box>

          <Button
            component={NavLink}
            to="/payment"
            state={{ selectedItems }}
            variant="contained"
            sx={{ bgcolor: '#f9405e' }}
            disabled={selectedItems.length === 0}
          >
            Buy now
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default CartPage
