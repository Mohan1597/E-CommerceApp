import React, { useState } from 'react'
import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import { productDetails } from '../SampleData'
import { BoxStyle , backgroundColorGray} from '../styles'
import BoxView from './BoxView'
import '../styles.css'
import Button from '@mui/material/Button'
import { buttonstylegray } from '../../mui-components/styles'
import { flexdirectionend } from '../styles'
import AddProductPopup from './PopUps/AddProductPopup'
import store from '../../../store'
import { buttonstylewhite } from '../../mui-components/styles'
import { useDispatch } from 'react-redux'
import { addNewProduct } from '../../../Slices/productSlice'

const DashboardHeader = () => {

  const [openPopup,setOpenPopup] = useState();

  const dispatch = useDispatch();

  const onButtonClick = () =>{
    setOpenPopup(true);
  }

  const onPopupcancel = () =>{
    setOpenPopup(false);
  }

  const onSave = (productName,quantity) =>{
    //Dispatching the item
    dispatch(addNewProduct({productName : productName,quantity: quantity}))
    setOpenPopup(false);
  }

  return (
    <Grid container xs={12}>
        <Grid item xs={12} md={8}>
            <div className='dashboardheading'>Welcome to Dashboard</div>
        </Grid>
        <Grid item container xs={12} md={3.8} sx={flexdirectionend}>
             <Button
                component="label"
                variant="contained"
                style={buttonstylewhite}
                onClick={onButtonClick}>
                    ADD A PRODUCT 
                </Button>
        </Grid>
        {openPopup && <AddProductPopup open={openPopup} onSave={onSave} onCancel={onPopupcancel} />}
    </Grid>
  )
}

export default DashboardHeader