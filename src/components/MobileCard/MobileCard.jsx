import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import goku from '~/assets/goku.jpg'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

function MobileCard() {
  return (
    <Card sx={{ marginTop: '62px' }}>
      <CardMedia component="img" alt="green iguana" height="140" image={goku} />
      <CardContent
        sx={{
          padding: '5px' // Áp dụng padding cho lớp con .MuiCardContent-root
        }}
      >
        <Typography
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: 2, // Số dòng muốn hiển thị
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
          variant="h5"
          component="div"
        >
          iphone 12 pro max 16GB Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Atque, tempora?
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex' }}>
          <Typography variant="h5" component="div" color="error">
            15.000.000đ
          </Typography>
          <Typography
            sx={{ textDecorationLine: 'line-through', ml: 0.5 }}
            variant="h6"
            component="div"
            color="textDisabled"
            un
          >
            12.000.000đ
          </Typography>
        </Box>
        <IconButton color="inherit">
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default MobileCard
