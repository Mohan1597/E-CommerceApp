import React, { useState } from 'react'
import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import { productDetailsjsonData } from '../SampleData'
import { BoxStyle , backgroundColorGray} from '../styles'
import store from '../../../store'
import { useSelector } from 'react-redux';

const BoxView = () => {

  const productDetails = useSelector((state) => state.productDetails);

  debugger

  return (
    <Grid container rowSpacing={6} marginTop={2}>
        {
            productDetails?.map((item) => {
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