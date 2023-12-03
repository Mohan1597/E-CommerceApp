import React, { useState } from 'react'
import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import { productDetailsjsonData } from '../SampleData'
import { BoxStyle , backgroundColorGray} from '../styles'
import store from '../../../store'
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button'
import { buttonstylered } from '../../MUIComponents/styles'
import { center } from '../styles'
import { flexdirectionend } from '../styles'
import { buttonstylegray } from '../../MUIComponents/styles'
import { buttonstyleyellow } from '../../MUIComponents/styles'

const BoxView = () => {

  const productDetails = useSelector((state) => state.productDetails);

  debugger

  return (
    <Grid container rowSpacing={6} marginTop={2}>
        {
            productDetails?.map((item) => {
                    return (
                      <Grid container spacing={2} xs ={12} md={3.8} style={BoxStyle}>
 
                      <Grid item container spacing={2}>
                          <Grid item container spacing={1} xs = {6}>
                                <Grid item xs = {12}>
                                     {item.productName}
                                  </Grid>
                                <Grid item xs = {12}>
                                      Available Qty : {item.quantity}
                                  </Grid>
                            </Grid>

                            <Grid item xs = {5} sx={flexdirectionend}>
                                  <img src='Images\HomePage\phoneimg.jpg' alt='' className='image'/>
                            </Grid>
                        </Grid>
                        

                         <Grid item container spacing={2} xs = {11.5} style={flexdirectionend}>
                            <Grid item>
                                <Button 
                                    style={buttonstylegray} 
                                    component="label"
                                    variant="contained"
                                    onClick={() => {}}>
                                            Remove
                                    </Button>
                              </Grid>
                              <Grid item>
                                  <Button  
                                      
                                      component="label"
                                      variant="contained"
                                      onClick={() => {}}>
                                              ADD MORE
                                      </Button>
                              </Grid>
                              <Grid item>
                                  <Button  
                                      component="label"
                                      variant="contained"
                                      style={buttonstyleyellow}
                                      onClick={() => {}}>
                                              Edit
                                      </Button>
                              </Grid>
                         </Grid>

                      </Grid>
                    )
            })
        }  
    </Grid>
  )
}

export default BoxView