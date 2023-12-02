import React from 'react'
import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import { productDetails } from '../SampleData'
import { BoxStyle , backgroundColorGray} from '../styles'
import BoxView from './BoxView'
import '../styles.css'
import Button from '@mui/material/Button'
import { buttonstylegray } from '../../MUIComponents/styles'
import { flexdirectionend } from '../styles'

const DashboardHeader = () => {
  return (
    <Grid container xs={12}>
        <Grid item xs={12} md={8}>
            <div className='dashboardheading'>Welcome to Dashboard</div>
        </Grid>
        <Grid item container xs={12} md={3.8} sx={flexdirectionend}>
             <Button
                component="label"
                variant="contained"
                style={buttonstylegray}>
                    ADD A PRODUCT 
                </Button>
        </Grid>
    </Grid>
  )
}

export default DashboardHeader