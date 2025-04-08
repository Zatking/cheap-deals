import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

function ProductCard() {
  return (
    <Card sx={{ borderRadius: '10px' }}>
      <CardMedia component="img" alt="green iguana" height="140" image="/asset/goku.jpg" />
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
            fontSize: '16px'
          }}
          component="div"
        >
          iphone 12 pro max 16GB Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Atque, tempora?
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '0' }}>
        <Box>
          <Typography
            sx={{ textDecorationLine: 'line-through', fontSize: '16px', height: 'fit-content' }}
            variant="h6"
            color="textDisabled"
          >
            12.000.000đ
          </Typography>
          <Typography variant="h6" component="div" color="error">
            15.000.000đ
          </Typography>
        </Box>
        <IconButton color="inherit" sx={{ alignSelf: 'end', paddingTop: 1 }} aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default ProductCard
