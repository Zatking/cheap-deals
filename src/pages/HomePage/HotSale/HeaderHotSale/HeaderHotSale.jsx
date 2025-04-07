import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
//#f9405e
function HeaderHotSale() {
  const [color, setColor] = useState('#555') // màu đen nhạt ban đầu

  useEffect(() => {
    const interval = setInterval(() => {
      setColor((prevColor) => (prevColor === '#555' ? '#fff' : '#555'))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}
    >
      <LocalFireDepartmentIcon fontSize="large" sx={{ color: '#fff' }} />
      <Typography
        variant="h4"
        sx={{
          color: '#fff',
          fontWeight: '400'
        }}
      >
        HOTSALE
      </Typography>
      <Typography
        sx={{
          color,
          fontSize: '25px',
          fontWeight: 'bold',
          transition: 'color 0.5s ease-in-out'
        }}
      >
        WEEKEND
      </Typography>
    </Box>
  )
}

export default HeaderHotSale
