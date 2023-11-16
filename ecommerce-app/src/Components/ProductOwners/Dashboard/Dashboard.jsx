import React from 'react'
import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import { productDetails } from '../SampleData'
import { BoxStyle , backgroundColorGray} from '../styles'
import BoxView from './BoxView'

const PODashboard = () => {
  return (
    <div style={backgroundColorGray}>
        <div>
           <BoxView /> 
        </div>
    </div>
  )
}

export default PODashboard