import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'

function HotSaleCountDown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  function getTimeLeft() {
    const now = new Date()
    const difference = new Date(targetDate) - now

    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((difference / 1000 / 60) % 60)
    const seconds = Math.floor((difference / 1000) % 60)

    return [days, hours, minutes, seconds]
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-start', mt: 1, alignItems: 'center' }}>
      <Typography sx={{ color: '#fff0bf' }} variant="h5" fontWeight="bold">
        Finish in:
      </Typography>
      {timeLeft.map((value, index) => (
        <React.Fragment key={index}>
          <Box
            sx={{
              width: 25,
              height: 25,
              borderRadius: '50%',
              backgroundColor: '#fff0bf',
              color: 'black',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 3
            }}
          >
            <Typography sx={{ fontSize: '14px' }} fontWeight="bold">
              {value.toString().padStart(2, '0')}
            </Typography>
          </Box>
          {index < timeLeft.length - 1 && (
            <Typography sx={{ color: '#fff0bf', fontSize: '16px', fontWeight: 'bold' }}>:</Typography>
          )}
        </React.Fragment>
      ))}
    </Box>
  )
}

export default HotSaleCountDown
