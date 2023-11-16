import React from 'react'
import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import { productDetails } from '../SampleData'
import { BoxStyle , backgroundColorGray} from '../styles'

const BoxView = () => {
  return (
    <Grid container rowSpacing={6} >
        {
            productDetails.map((item) => {
                    return (
                        <Grid item xs ={12} md={3.8} style={BoxStyle}>
                               {item.productName}
                         </Grid>
                    )
            })
        }  
    </Grid>
  )
}

export default BoxView