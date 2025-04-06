import { Badge, IconButton } from '@mui/material'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

function Cart() {
  return (
    <IconButton color="inherit">
      <Badge badgeContent={4} color="primary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  )
}

export default Cart
