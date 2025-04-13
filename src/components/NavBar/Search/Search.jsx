import React, { useState, useEffect, useRef } from 'react'
import { Box, InputBase, Popper, Paper, List, ListItem, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useNavigate } from 'react-router-dom'

function Search({ data }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const inputRef = useRef(null)
  const navigate = useNavigate()

  // Lọc dữ liệu theo query (debounce)
  useEffect(() => {
    const handler = setTimeout(() => {
      if (!query) {
        setResults([])
        setOpen(false)
        return
      }

      const lowerQuery = query.toLowerCase()
      const matches = []

      for (const category of Object.values(data)) {
        for (const brand of Object.values(category)) {
          if (Array.isArray(brand)) {
            const filtered = brand.filter((product) => product.title.toLowerCase().includes(lowerQuery))
            matches.push(...filtered)
          }
        }
      }

      setResults(matches)
      setOpen(matches.length > 0)
    }, 300)

    return () => clearTimeout(handler)
  }, [query, data])

  // Xử lý khi chọn sản phẩm
  const handleSelectProduct = (product) => {
    navigate('/productDetail', { state: { product } })
    setQuery('')
    setResults([])
    setOpen(false)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          bgcolor: 'white',
          px: 2,
          borderRadius: 2,
          height: 40,
          border: '1px solid #ccc'
        }}
      >
        <SearchIcon color="action" />
        <InputBase
          inputRef={inputRef}
          placeholder="Search deals..."
          sx={{ ml: 1, flex: 1 }}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setAnchorEl(inputRef.current)
          }}
        />
      </Box>

      <Popper
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: [16, 8] // [horizontal, vertical]
            }
          }
        ]}
        style={{ zIndex: 1200, width: '196px' }}
      >
        <Paper sx={{ width: '100%', maxHeight: 300, overflowY: 'auto' }}>
          <List>
            {results.map((product, index) => (
              <ListItem key={index} button onClick={() => handleSelectProduct(product)}>
                <img src={product.image} alt={product.title} width={50} height={50} style={{ marginRight: 10 }} />
                <Typography>{product.title}</Typography>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Popper>
    </Box>
  )
}

export default Search
