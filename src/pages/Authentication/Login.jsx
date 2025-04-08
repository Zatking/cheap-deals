import React, { useState } from 'react'
import { Box, TextField, Button, Typography, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'

export default function Login() {
  // State variables for form fields, error message, and success dialog visibility
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('') // Error message state
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false)

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    let valid = true

    // Reset error message
    setErrorMessage('')

    // Validate email and password together
    if (email !== 'test@example.com' || password !== 'password123') {
      setErrorMessage('Email or password is incorrect.')
      valid = false
    }

    // If both fields are valid, show success popup
    if (valid) {
      setOpenSuccessDialog(true)
    }
  }

  // Handle closing the success dialog
  const handleCloseDialog = () => {
    setOpenSuccessDialog(false)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: '100vh',
        marginX: 'auto',
        backgroundColor: '#f8f8f8'
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 2, color: '#f9405e' }}>
        Sign In
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: '80%',
          maxWidth: '400px',
          backgroundColor: 'white',
          padding: 3,
          borderRadius: 2,
          boxShadow: 3
        }}
      >
        {/* Email input field */}
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ marginBottom: 2 }}
        />

        {/* Password input field */}
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ marginBottom: 2 }}
        />

        {/* Error message Typography */}
        {errorMessage && (
          <Typography variant="body2" color="error" sx={{ marginBottom: 1, textAlign: 'start' }}>
            {errorMessage}
          </Typography>
        )}

        {/* Submit button */}
        <Button type="submit" variant="contained" color="error" fullWidth sx={{ marginTop: 1 }}>
          Sign In
        </Button>

        {/* Link to sign up page */}
        <Box>
          <Typography variant="body2" sx={{ marginTop: 1, textAlign: 'center' }}>
            Don't have an account?{' '}
            <Button variant="text" color="primary" onClick={() => alert('Redirect to Sign Up')}>
              Sign Up
            </Button>
          </Typography>
        </Box>
      </Box>

      {/* Success Dialog (popup) */}
      <Dialog open={openSuccessDialog} onClose={handleCloseDialog}>
        <DialogTitle sx={{ color: '#4caf50' }}>Login Successful</DialogTitle>
        <DialogContent>
          <Typography sx={{ fontWeight: '300' }}>Welcome back! You have successfully logged in.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
