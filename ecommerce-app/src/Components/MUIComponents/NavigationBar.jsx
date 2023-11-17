import React from 'react'
import { Grid } from '@mui/material'
import Box from '@mui/material/Box'

const NavigationBar = ({children}) => {
  return (
    <Box>
        <Grid xs={12} height={100}>
           hii
        </Grid>
        <Grid xs={12}>
            {children}
        </Grid>
    </Box>
  )
}

export default NavigationBar