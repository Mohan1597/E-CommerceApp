import React, { useState } from 'react'
import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import { productDetailsjsonData } from '../SampleData'
import { BoxStyle , backgroundColorGray} from '../styles'

const BoxView = () => {

  const [productDetails,setProductDetails] = useState(productDetailsjsonData);

  return (
    <Grid container rowSpacing={6} marginTop={2}>
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