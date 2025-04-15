import React from 'react'
import { Box,Grid,Typography,Button,Container,Paper } from '@mui/material'
import {LoginIcon,PersonAddIcon} from '@mui/icons-material'
import navbar from '../Components/navbar'
function app() {
    return (
        <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh'}}>
            <navbar/>
            <Container maxWidth="sm">
                <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Share your story with the world
                    </Typography>
                    <Typography variant="body1" component="p" gutterBottom>
        Join a community of readers and writers on blogit.Publish your thoughts and experience.
        </Typography>
        <button variant='outlined' color='primary' size='large' sx={{}}>Start Writing</button>
        <button variant='outlined' color='primary' size='large' sx={{}}>Explore stories for readers</button>
   </Paper>
   </Container>
    </Box>

    )
}
export default LandingPage