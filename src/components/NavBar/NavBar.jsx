import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Box, IconButton, Typography, Link } from '@mui/material'
import Search from './Search/Search'
import SideDrawer from './SideDrawer/SideDrawer'
import { useState } from 'react'
import { Badge } from '@mui/material'
import { NavLink } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { mockData as data } from '../../mock-data'

export default function NavBar() {
  // nothing  new
  const [open, setOpen] = useState(false)

  const itemQuantity = JSON.parse(localStorage.getItem('cart'))?.length

  const toggleDrawer = (open) => () => {
    setOpen(open)
  }

  return (
    <AppBar sx={{ bgcolor: '#f9405e', padding: 1 }}>
      <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center', justifyContent: 'space-evenly' }}>
        {/* Menu Icon for Drawer */}
        <IconButton sx={{ flexShrink: 1 }} color="inherit" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>

        {/* Logo */}
        <Typography
          component={NavLink}
          to="/"
          sx={{
            flexShrink: 0,
            lineHeight: 1,
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
            color: 'white',
            textDecoration: 'none'
          }}
          variant="h6"
          noWrap
        >
          Cheap
          <br />
          Deals
        </Typography>

        <Search data={data.products} sx={{ flexShrink: 1 }}></Search>

        <IconButton component={NavLink} to="/cart" color="inherit">
          <Badge badgeContent={itemQuantity} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Box>

      {/* SideDrawer với onClose để đóng Drawer khi bấm ra ngoài */}
      <SideDrawer open={open} toggleDrawer={toggleDrawer}></SideDrawer>
    </AppBar>
  )
}
