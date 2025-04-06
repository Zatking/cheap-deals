import { Box, Drawer, List, ListItem, ListItemText } from '@mui/material'

function SideDrawer({ open, toggleDrawer }) {
  const drawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Home', 'Sign Up', 'Profile'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  )
  return (
    <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
      {drawerList}
    </Drawer>
  )
}

export default SideDrawer
