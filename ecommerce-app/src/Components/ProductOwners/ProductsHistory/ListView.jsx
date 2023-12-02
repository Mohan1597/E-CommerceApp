import React, { useState } from 'react'
import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import { productDetailsjsonData } from '../SampleData'
import { backgroundColorListView } from '../styles'
import store from '../../../store'
import { useSelector } from 'react-redux'

const ListView = () => {
    
    const productDetails = useSelector((state) => state.productDetails);

  return (
    <Grid container spacing={2} marginTop={2}>
        {
            productDetails?.map((item) => {
                    return (
                        <Grid item xs={12} sx={backgroundColorListView}>
                            {item.productName}
                        </Grid>
                    )
            })
        }  
    </Grid>
  )
}

export default ListView