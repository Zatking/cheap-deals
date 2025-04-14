import { Box, Button, Typography, TextField, Card, CardMedia, IconButton, Divider, Modal } from '@mui/material'

import NavBar from '~/components/NavBar/NavBar'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const paymentMethods = [
  {
    id: 'visa',
    label: 'Visa ',
    logo: '/assets/paymentMethod/visa.png'
  },
  {
    id: 'mastercard',
    label: 'mastercard',
    logo: '/assets/paymentMethod/mastercard.png'
  },
  {
    id: 'paypal',
    label: 'PayPal',
    logo: '/assets/paymentMethod/paypal.png'
  },

  {
    id: 'american-express',
    label: 'american-express',
    logo: '/assets/paymentMethod/americaExpress.png'
  }
]

function PaymentPage() {
  const [voucherCode, setVoucherCode] = useState('')
  const [voucherApplied, setVoucherApplied] = useState(false)

  const [selected, setSelected] = useState('')

  const [recipientName, setRecipientName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')

  useEffect(() => {
    const savedProfile = localStorage.getItem('yourProfile')
    if (savedProfile) {
      const { name, email, phone, address } = JSON.parse(savedProfile)
      setRecipientName(name || '')
      setEmail(email || '')
      setPhone(phone || '')
      setAddress(address || '')
    }
  }, [])
  const [modalOpen, setModalOpen] = useState(false)
  const [modalMessage, setModalMessage] = useState('')
  const [showAllCards, setShowAllCards] = useState(false)

  const location = useLocation()
  const rawData = location.state?.selectedItems || location.state?.product
  const selectedItems = Array.isArray(rawData) ? rawData : [rawData]

  const navigate = useNavigate()
  console.log('selectedItems', selectedItems)

  const handleApplyVoucher = () => {
    if (voucherCode.toLowerCase() === 'coursework80') {
      setVoucherApplied(true)
    } else {
      setVoucherApplied(false)
    }
  }
  const selectedCartItems = selectedItems

  const quantityTotal = selectedCartItems.reduce((sum, item) => sum + item.quantity, 0) || 1

  const originalTotalPrice =
    selectedCartItems.reduce((total, item) => {
      const numericPrice = parseFloat(item.price.replace('£', '').replace(',', ''))
      return total + numericPrice * item.quantity
    }, 0) || selectedItems[0].price

  const discountedPrice = voucherApplied ? originalTotalPrice * 0.85 : originalTotalPrice

  const handleOrder = () => {
    if (!selected) {
      setModalMessage('Please select a payment method.')
      setModalOpen(true)
      return
    }
    if (!recipientName || !email || !phone || !address) {
      setModalMessage('Please fill in all recipient information.')
      setModalOpen(true)
      return
    }

    // Order success message
    setModalMessage('Order placed successfully!')
    setModalOpen(true)
    setTimeout(() => {
      // Navigate to the home page after 2 seconds

      navigate('/')
    }, 2000)
  }

  return (
    <Box sx={{ bgcolor: '#f8f8f8', pb: 10 }}>
      {console.log('render2')}
      <NavBar></NavBar>
      {/* navigation */}
      <Box
        sx={{
          position: 'relative',
          marginTop: '62px',
          marginX: 'auto',
          bgcolor: '#f8f8f8',
          height: 48, // chiều cao cố định
          display: 'flex',
          alignItems: 'center',
          px: 2,
          marginBottom: 2,
          borderBottom: '1px solid #ccc'
        }}
      >
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

        <Typography
          variant="h6"
          sx={{
            fontWeight: '600',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        >
          Payment
        </Typography>
      </Box>
      {/* product */}
      <Box sx={{ width: '96%', marginX: 'auto', bgcolor: 'white', borderRadius: 2, transition: '0.3s' }}>
        {/* Hiển thị các sản phẩm được chọn */}
        {selectedItems.slice(0, showAllCards ? selectedItems.length : 1).map((product, index) => (
          <Box key={index} sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'start' }}>
              <CardMedia
                component="img"
                image={product.image}
                sx={{
                  width: '15%',
                  height: '15%',
                  objectFit: 'cover',
                  borderRadius: 2
                }}
              />

              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', flex: 1, ml: 1 }}>
                <Typography sx={{ fontSize: '16px' }} fontWeight="bold">
                  {product.title}
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <Typography variant="body2" color="warning" sx={{ mt: 1 }}>
                    Price: {product.price}
                  </Typography>
                  <Typography variant="body2" color="warning" sx={{ mt: 1 }}>
                    x{product.quantity || 1}
                  </Typography>
                </Box>
              </Box>
            </Box>

            {index < selectedItems.length - 1 && <Divider sx={{ bgcolor: '#F8F8F8' }} />}
          </Box>
        ))}

        {selectedItems.length > 1 && (
          <Box sx={{ textAlign: 'center' }}>
            <IconButton
              onClick={() => setShowAllCards(!showAllCards)}
              sx={{
                color: '#f9405e',
                p: 0
              }}
            >
              {showAllCards ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </IconButton>
          </Box>
        )}
      </Box>

      {/* voucher */}
      <Box
        sx={{
          bgcolor: 'white',
          width: '96%',
          margin: 'auto',
          border: '1px solid #ddd',
          borderRadius: 2,
          mt: 2,
          p: 1.5,
          boxSizing: 'border-box'
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <TextField
            size="small"
            placeholder="Enter voucher code"
            value={voucherCode}
            onChange={(e) => setVoucherCode(e.target.value)}
          />
          <Button variant="contained" sx={{ bgcolor: '#f9405e' }} onClick={handleApplyVoucher}>
            Apply
          </Button>
        </Box>

        {voucherApplied && <Typography sx={{ color: 'green', mb: 1 }}>Successfully applied - 15% off</Typography>}

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography>Product Quantity</Typography>
          <Typography>{quantityTotal}</Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography>Price</Typography>
          <Typography color="error">
            {originalTotalPrice.toLocaleString('en-UK', {
              style: 'currency',
              currency: 'GBP'
            })}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography>Delivery fee</Typography>
          <Typography sx={{ fontWeight: 500 }}>FREE</Typography>
        </Box>
      </Box>

      {/* payment method */}
      <Box
        sx={{
          bgcolor: 'white',
          width: '96%',
          boxSizing: 'border-box',
          margin: 'auto',
          padding: 1.5,
          border: '1px solid #ddd',
          borderRadius: 2,
          mt: 2
        }}
      >
        <Typography variant="h6" fontWeight={600} mb={1.5}>
          Payment Method
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          {paymentMethods.map((method) => (
            <Box
              key={method.id}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                gap: 1
              }}
              onClick={() => setSelected(method.id)}
            >
              <IconButton
                sx={{
                  width: 55,
                  height: 55,
                  borderRadius: '50%',
                  border: selected === method.id ? '2px solid #f9405e' : '2px solid #ccc',
                  p: 1
                }}
              >
                <img
                  src={method.logo}
                  alt={method.label}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </IconButton>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Recipient Info */}
      <Box
        sx={{
          bgcolor: 'white',
          width: '96%',
          mx: 'auto',
          mt: 2,
          boxSizing: 'border-box',
          border: '1px solid #ddd',
          borderRadius: 2,
          padding: 2,
          marginBottom: 4,
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}
      >
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Recipient Information
        </Typography>

        <TextField
          label="Recipient Name"
          variant="standard"
          fullWidth
          value={recipientName}
          onChange={(e) => setRecipientName(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Email"
          variant="standard"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Phone Number"
          variant="standard"
          fullWidth
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Full Address"
          variant="standard"
          fullWidth
          multiline
          rows={2}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
      </Box>

      {/* Order Button */}
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
          <Typography variant="h6" sx={{ color: '#f9405e' }}>
            Total Price:{' '}
            {discountedPrice.toLocaleString('en-UK', {
              style: 'currency',
              currency: 'GBP'
            })}{' '}
          </Typography>
          <Button variant="contained" sx={{ bgcolor: '#f9405e' }} onClick={handleOrder}>
            Order
          </Button>
        </Box>
      </Box>

      {/* Modal for error message */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Box
          sx={{
            bgcolor: 'white',
            borderRadius: 2,
            padding: 4,
            boxShadow: 24,
            width: '90%',
            maxWidth: 400,
            textAlign: 'center'
          }}
        >
          <Typography variant="h6" fontWeight={600} mb={2}>
            Notification
          </Typography>
          <Typography mb={2}>{modalMessage}</Typography>
          <Button color="success" variant="contained" onClick={() => setModalOpen(false)}>
            OK
          </Button>
        </Box>
      </Modal>
    </Box>
  )
}

export default PaymentPage
