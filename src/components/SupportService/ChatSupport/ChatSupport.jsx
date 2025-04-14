import React, { useState, useRef, useEffect } from 'react'
import { Box, TextField, IconButton, Paper } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import CloseIcon from '@mui/icons-material/Close'

function ChatSupport({ onClose }) {
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleSend = () => {
    const trimmed = inputValue.trim()
    if (!trimmed) return

    setMessages((prev) => [...prev, { from: 'user', text: trimmed }])
    setInputValue('')
    inputRef.current?.focus()

    setTimeout(() => {
      // Simple fixed replies based on keywords
      let reply = 'Thank you for reaching out to DealCheap!'

      if (trimmed.toLowerCase().includes('price')) {
        reply = "We have many products on sale up to 50% off. Is there something you're looking for?"
      } else if (trimmed.toLowerCase().includes('iphone')) {
        reply = 'The iPhone 13 is currently on sale for £949. Would you like to place an order?'
      } else if (trimmed.toLowerCase().includes('in stock')) {
        reply = 'Yes, the product you asked about is currently in stock. Need help placing an order?'
      } else if (trimmed.toLowerCase().includes('delivery')) {
        reply = 'We offer nationwide delivery within 2-4 working days.'
      } else if (trimmed.toLowerCase().includes('bye')) {
        reply = 'Thank you. Hope to see you again soon!'
      } else if (trimmed.toLowerCase().includes('thanks') || trimmed.toLowerCase().includes('tks')) {
        reply = 'your welcome!'
      } else {
        reply = 'Can I help you with products, prices, or delivery?'
      }

      setMessages((prev) => [...prev, { from: 'bot', text: reply }])
    }, 800)
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <Box sx={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000 }}>
      <Paper
        elevation={6}
        sx={{
          width: 320,
          height: 450,
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 2,
          overflow: 'hidden',
          bgcolor: '#fff'
        }}
      >
        {/* Header */}
        <Box
          sx={{
            p: 1.5,
            bgcolor: '#f9405e',
            color: 'white',
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          DealCheap Support
          <Box sx={{ cursor: 'pointer' }} onClick={onClose}>
            <CloseIcon />
          </Box>
        </Box>

        {/* Messages */}
        <Box
          sx={{
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none'
            },
            flex: 1,
            overflowY: 'auto',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            bgcolor: '#f9f9f9'
          }}
        >
          {messages.map((msg, idx) => (
            <Box
              key={idx}
              sx={{
                alignSelf: msg.from === 'user' ? 'flex-end' : 'flex-start',
                bgcolor: msg.from === 'user' ? '#f9405e' : '#eee',
                color: msg.from === 'user' ? 'white' : 'black',
                p: 1,
                borderRadius: 2,
                maxWidth: '80%'
              }}
            >
              {msg.text}
            </Box>
          ))}
        </Box>

        {/* Input */}
        <Box
          sx={{
            p: 1,
            display: 'flex',
            borderTop: '1px solid #ddd'
          }}
        >
          <TextField
            inputRef={inputRef}
            variant="standard"
            placeholder="Enter your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            fullWidth
            sx={{ px: 1 }}
            InputProps={{
              disableUnderline: true
            }}
          />
          {inputValue.trim() && (
            <IconButton onClick={handleSend} sx={{ color: '#f9405e' }}>
              <SendIcon />
            </IconButton>
          )}
        </Box>
      </Paper>
    </Box>
  )
}

export default ChatSupport
