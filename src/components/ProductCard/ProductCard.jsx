import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { NavLink, useNavigate } from 'react-router-dom'

function ProductCard({ product }) {
  const navigate = useNavigate()
  const handleCardClick = () => {
    navigate('/productDetail', { state: { product } })
  }

  return (
    <Card sx={{ p: 1, borderRadius: '10px' }} onClick={handleCardClick}>
      <CardMedia component="img" alt="green iguana" height="140" image={product?.image} sx={{ objectFit: 'contain' }} />
      <CardContent
        sx={{
          padding: '0 5px'
        }}
      >
        <Typography
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            fontSize: '20px',
            pt: 1
          }}
          component="div"
        >
          {product?.title}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '0' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography
            sx={{ textDecorationLine: 'line-through', fontSize: '16px', height: 'fit-content' }}
            variant="h6"
            color="textDisabled"
          >
            {product?.oldPrice}
          </Typography>
          <Typography variant="h6" component="div" color="error">
            {product?.price}
          </Typography>
        </Box>
        {/* <IconButton color="inherit" sx={{ alignSelf: 'end', paddingTop: 1 }} aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton> */}
      </CardActions>
    </Card>
  )
}

export default ProductCard
