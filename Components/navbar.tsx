import React from 'react'
import {AppBar,Toolbar,Typography,Button,Box, getAppBarUtilityClass} from '@mui/material'
import {LoginIcon,PersonAddIcon} from '@mui/icons-material'
function navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BlogIt
          </Typography>
          <Box display={'flex',gap: 2 }>
          <Button color="inherit" startIcon={<LoginIcon />}>Login</Button>
          <Button color="inherit" startIcon={<PersonAddIcon />}>SignUp</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default navbar
