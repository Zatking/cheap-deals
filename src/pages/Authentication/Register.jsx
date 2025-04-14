import React, { useState } from 'react'
import { Box, TextField, Button, Typography, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { useNavigate, NavLink } from 'react-router-dom'
export default function Register() {
  // State variables for form fields and error messages
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false)

  const navigate = useNavigate()
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    let valid = true

    // Validate email format (simple regex to check for valid email)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.')
      valid = false
    } else {
      setEmailError('')
    }

    // Validate password length (must be at least 8 characters)
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long.')
      valid = false
    } else {
      setPasswordError('')
    }

    // Validate confirm password (must match the password)
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords don't match!")
      valid = false
    } else {
      setConfirmPasswordError('')
    }

    // If all fields are valid, show success popup
    if (valid) {
      // Save user data to localStorage
      const userData = {
        email,
        password
      }
      localStorage.setItem('user', JSON.stringify(userData))

      // Show success dialog
      setOpenSuccessDialog(true)

      // Redirect to login after delay
      setTimeout(() => {
        navigate('/login')
      }, 2000)
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
        Sign Up
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
          error={!!emailError}
          helperText={emailError}
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
          error={!!passwordError}
          helperText={passwordError}
        />

        {/* Confirm Password input field */}
        <TextField
          label="Confirm Password"
          variant="outlined"
          type="password"
          fullWidth
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          sx={{ marginBottom: 2 }}
          error={!!confirmPasswordError}
          helperText={confirmPasswordError}
        />

        {/* Submit button */}
        <Button type="submit" variant="contained" color="error" fullWidth sx={{ marginTop: 1 }}>
          Sign Up
        </Button>

        {/* Link to Login page */}
        <Box>
          <Typography variant="body2" sx={{ marginTop: 1, textAlign: 'center' }}>
            Already have an account?{' '}
            <Button component={NavLink} to="/login" variant="text" color="primary">
              Log In
            </Button>
          </Typography>
        </Box>
      </Box>

      {/* Success Dialog (popup) */}
      <Dialog open={openSuccessDialog} onClose={handleCloseDialog}>
        <DialogTitle sx={{ color: '#4caf50' }}>Registration Successful</DialogTitle>
        <DialogContent>
          <Typography sx={{ fontWeight: '300' }}>Welcome! Your account has been created successfully.</Typography>
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
