import { Box, Drawer, List, ListItem, ListItemText, Collapse, IconButton, Divider, Link } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'

function SideDrawer({ open, toggleDrawer }) {
  const [openCategory, setOpenCategory] = useState(false)

  const drawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem button="true">
          <ListItemText primary="Profile" />
        </ListItem>

        <ListItem button="true" onClick={() => setOpenCategory(!openCategory)}>
          <ListItemText primary="Category" />
          <IconButton edge="end">{openCategory ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</IconButton>
        </ListItem>

        <Collapse in={openCategory} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button="true" sx={{ pl: 4 }}>
              <ListItemText primary="• Smart Phone" />
            </ListItem>
            <ListItem button="true" sx={{ pl: 4 }}>
              <ListItemText primary="• Tablet" />
            </ListItem>
          </List>
        </Collapse>

        <Divider />

        <ListItem sx={{ textDecoration: 'none', color: 'black' }} component={NavLink} to="/login" button="true">
          <ListItemText primary="Sign In" />
        </ListItem>
        <ListItem button="true">
          <ListItemText
            sx={{ textDecoration: 'none', color: 'black' }}
            component={NavLink}
            to="/login"
            primary="Log out"
          />
        </ListItem>
      </List>
    </Box>
  )

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={toggleDrawer(false)} // Đóng Drawer khi nhấn ra ngoài
    >
      {drawerList}
    </Drawer>
  )
}

export default SideDrawer
