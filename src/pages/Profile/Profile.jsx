import React, { useState } from 'react'
import { Box, TextField, Typography, Paper, Button, Alert } from '@mui/material'
import NavBar from '~/components/NavBar/NavBar'

function RecipientProfile() {
  const [recipientName, setRecipientName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSave = () => {
    // Reset state
    setError('')
    setSuccess(false)

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (email && !emailRegex.test(email)) {
      setError('Invalid email format')
      return
    }

    // Save to localStorage
    const recipientData = {
      name: recipientName,
      phone,
      email,
      address
    }

    localStorage.setItem('yourProfile', JSON.stringify(recipientData))
    setSuccess(true)
  }

  return (
    <>
      <NavBar></NavBar>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: '64px'
        }}
      >
        <Box
          sx={{
            width: '94%',
            maxWidth: 600,
            margin: '0 auto',
            borderRadius: 2,
            p: 2,
            backgroundColor: '#fff'
          }}
        >
          <Typography variant="h4" sx={{ textAlign: 'center', mb: 2, color: '#f9405e' }}>
            Recipient Profile
          </Typography>

          <Paper elevation={3} sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <TextField
                label="Full Name"
                variant="outlined"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                fullWidth
                sx={inputStyles}
              />

              <TextField
                label="Phone Number"
                variant="outlined"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                fullWidth
                sx={inputStyles}
              />

              <TextField
                label="Email"
                variant="outlined"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                sx={inputStyles}
              />

              <TextField
                label="Address"
                variant="outlined"
                multiline
                rows={3}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                fullWidth
                sx={inputStyles}
              />

              {error && <Alert severity="error">{error}</Alert>}
              {success && <Alert severity="success">Saved to localStorage successfully!</Alert>}

              <Button
                variant="contained"
                onClick={handleSave}
                sx={{
                  backgroundColor: '#f9405e',
                  '&:hover': { backgroundColor: '#e2334e' }
                }}
              >
                Save
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  )
}

// Reusable input style
const inputStyles = {
  '& label': { color: '#f9405e' },
  '& label.Mui-focused': { color: '#f9405e' },
  '& .MuiOutlinedInput-root': {
    '& fieldset': { borderColor: '#f9405e' },
    '&:hover fieldset': { borderColor: '#f9405e' },
    '&.Mui-focused fieldset': { borderColor: '#f9405e' }
  }
}

export default RecipientProfile
