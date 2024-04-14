import React from 'react'
import ResponsiveAppBar from '../mui-components/HomeBar.tsx'
import { Grid } from '@mui/material'

const LandingPage = () => {
  return (
    <Grid container spacing={0}>
        <Grid item xs={12}>
           <ResponsiveAppBar />
        </Grid>
        <Grid item xs={12} >
           <img src='Images\HomePage\home-bg.AVIF' alt='' style={{width: '100%'}}/>
        </Grid>
    </Grid>
  )
}

export default LandingPage