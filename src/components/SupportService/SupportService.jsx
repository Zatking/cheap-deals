import AddCallIcon from '@mui/icons-material/AddCall'
import ChatIcon from '@mui/icons-material/Chat'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import CloseIcon from '@mui/icons-material/Close'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import * as React from 'react'
import ChatSupport from './ChatSupport/ChatSupport'
import { keyframes } from '@emotion/react'

const pulse = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.7;
  }
  70% {
    transform: translate(-50%, -50%) scale(1.8);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.8);
    opacity: 0;
  }
`

export default function SupportServiceWrapper() {
  const [openActions, setOpenActions] = React.useState(false)
  const [showChat, setShowChat] = React.useState(false)
  const radius = 100

  const handleToggle = () => setOpenActions((prev) => !prev)

  const actions = [
    { icon: <NotificationsIcon sx={{ color: 'white' }} />, name: 'Print' },
    {
      icon: <ChatIcon sx={{ color: 'white' }} />,
      name: 'Chat Now',
      onClick: () => setShowChat(true)
    },
    { icon: <AddCallIcon sx={{ color: 'white' }} />, name: 'Free Call' }
  ]

  if (showChat) {
    return <ChatSupport onClose={() => setShowChat(false)} />
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        right: '5%',
        bottom: '5%',
        zIndex: 10,
        transform: 'translateZ(0px)',
        flexGrow: 1
      }}
    >
      {actions.map((action, index) => {
        const angle = (index / (actions.length - 1)) * (Math.PI / 2)
        const x = radius * Math.cos(angle)
        const y = radius * Math.sin(angle)

        return (
          <Fab
            key={action.name}
            size="small"
            onClick={() => {
              setOpenActions(false)
              action.onClick?.()
            }}
            sx={{
              position: 'absolute',
              bottom: 16 + y,
              right: 16 + x,
              opacity: openActions ? 1 : 0,
              transition: 'all 0.3s ease',
              pointerEvents: openActions ? 'auto' : 'none',
              backgroundColor: '#f9405e',
              color: 'white',
              '&:hover': {
                backgroundColor: '#d8344e'
              }
            }}
          >
            {action.icon}
          </Fab>
        )
      })}

      <Fab
        onClick={handleToggle}
        sx={{
          backgroundColor: '#f9405e',
          color: 'white',
          position: 'relative',
          '&:hover': {
            backgroundColor: '#d8344e'
          }
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: 60,
            height: 60,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            backgroundColor: 'rgba(249, 64, 94, 0.4)',
            animation: `${pulse} 1.5s infinite`,
            zIndex: -1
          }}
        />
        {openActions ? <CloseIcon /> : <SupportAgentIcon />}
      </Fab>
    </Box>
  )
}
