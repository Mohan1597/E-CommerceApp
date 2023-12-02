import React from 'react'
import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import { productDetails } from '../SampleData'
import { BoxStyle , backgroundColorGray} from '../styles'
import BoxView from './BoxView'
import '../styles.css'
import DashboardHeader from './DashboardHeader'

const PODashboard = () => {
  return (
        <Box>
          <Grid >
                <DashboardHeader />
          </Grid>
          <Grid item xs={12}>
               <BoxView /> 
          </Grid>
        </Box>
  )
}

export default PODashboard