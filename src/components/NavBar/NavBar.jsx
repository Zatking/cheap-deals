import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Grid, IconButton, Box, Typography } from '@mui/material'
import Cart from './Cart/Cart'
import Search from './Search/Search'
import SideDrawer from './SideDrawer/SideDrawer'
import { useState } from 'react'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
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
          sx={{
            flexShrink: 0,
            lineHeight: 1,
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)' // Áp dụng drop shadow
          }}
          variant="h6"
          noWrap
          component="div"
        >
          Cheap
          <br />
          Deals
        </Typography>

        <Search sx={{ flexShrink: 1 }}></Search>
        <Cart sx={{ flexShrink: 1 }}></Cart>
      </Box>
      {/* Cart Icon */}

      <SideDrawer open={open} toggleDrawer={toggleDrawer}></SideDrawer>
    </AppBar>
  )
}
