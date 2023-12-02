import React, { useState } from 'react'
import Dialog  from '@mui/material/Dialog'
import DialogTitle  from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button'


const AddProductPopup = (props) => {

  const {open,onCancel,onSave} = props;

  const [productName,setProductName] = useState('');

  const handleChange = (ev) =>{
    setProductName(ev.target.value);
  }

  return (
    <Dialog open={open}>
        <DialogTitle>
              ADD A PRODUCT 
        </DialogTitle>
        <DialogContent>
            <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="Product Name"
                    label="Product Name"
                    defaultValue={productName}
                    name="pname"
                    onChange={(event)=>{handleChange(event)}}
                    autoFocus
                />
            <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Available Quantity"
                    name="qty"
                    onChange={()=>{}}
                    autoFocus
                />
        </DialogContent>
        <DialogActions>
            <Button
                component="label"
                variant="contained"
                onClick={onCancel}>
                    Cancel 
                </Button>
             <Button
                component="label"
                variant="contained"
                onClick={() => onSave(productName)}>
                    SAVE 
                </Button>
        </DialogActions>
    </Dialog>
  )
}

export default AddProductPopup