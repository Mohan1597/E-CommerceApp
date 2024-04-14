import React, { useState } from 'react'
import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import { productDetailsjsonData } from '../SampleData'
import { BoxStyle , backgroundColorGray} from '../styles'
import store from '../../../store'
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button'
import { buttonstylered } from '../../mui-components/styles'
import { center } from '../styles'
import { flexdirectionend } from '../styles'
import { buttonstylegray } from '../../mui-components/styles'
import { buttonstyleyellow } from '../../mui-components/styles'
import RemoveProductPopup from './PopUps/RemoveProductPopup'
import { useDispatch } from 'react-redux'
import { removeProduct } from '../../../slices/productslice'

const BoxView = () => {


  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.products);

  debugger

  const [openPopup,setOpenPopup] = useState();
  const [selectedItem,setSelectedItem] = useState();

  const onButtonClick = (item) =>{
    setSelectedItem(item.id);
    setOpenPopup(true);
  }

  const onPopupcancel = () =>{
    setOpenPopup(false);
  }

  const onSave = (productid) =>{
    //Dispatching the item
    dispatch(removeProduct({id : selectedItem}))
   /*  dispatch({
        type : "ProductRemoved",
        payload : {
          id : selectedItem,
        }
    }) */
    setOpenPopup(false);
  }

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
                                    onClick={() => onButtonClick(item)}>
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
        {openPopup && <RemoveProductPopup open={openPopup} onSave={onSave} onCancel={onPopupcancel} />}
    </Grid>
  )
}

export default BoxView