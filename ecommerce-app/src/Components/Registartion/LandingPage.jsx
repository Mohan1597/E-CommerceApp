import React from 'react'
import { Grid } from '@mui/material'
import HomeBar from '../mui-components/HomeBar'

const LandingPage = () => {
  return (
    <Grid container spacing={0}>
        <Grid item xs={12}>
          <HomeBar />
        </Grid>
        <Grid item xs={12} >
           <img src='Images\HomePage\home-bg.AVIF' alt='' style={{width: '100%'}}/>
        </Grid>
    </Grid>
  )
}

export default LandingPage