import React, { useState } from 'react'
import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import { productDetails } from '../SampleData'
import { BoxStyle , backgroundColorGray} from '../styles'
import BoxView from './BoxView'
import '../styles.css'
import Button from '@mui/material/Button'
import { buttonstylegray } from '../../MUIComponents/styles'
import { flexdirectionend } from '../styles'
import AddProductPopup from './PopUps/AddProductPopup'
import store from '../../../store'

const DashboardHeader = () => {

  const [openPopup,setOpenPopup] = useState();

  const onButtonClick = () =>{
    setOpenPopup(true);
  }

  const onPopupcancel = () =>{
    setOpenPopup(false);
  }

  const onSave = (productName) =>{
    //Dispatching the item
    store.dispatch({
        type : "ProductAdded",
        payload : {
            productName : productName,
        }
    })
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
                style={buttonstylegray}
                onClick={onButtonClick}>
                    ADD A PRODUCT 
                </Button>
        </Grid>
        {openPopup && <AddProductPopup open={openPopup} onSave={onSave} onCancel={onPopupcancel} />}
    </Grid>
  )
}

export default DashboardHeader