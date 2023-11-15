import React from 'react'
import ResponsiveAppBar from '../MUIComponents/HomeBar.tsx'
import { Grid } from '@mui/material'

const HomePage = () => {
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

export default HomePage