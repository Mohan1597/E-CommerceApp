import React, { useState } from 'react'
import Dialog  from '@mui/material/Dialog'
import DialogTitle  from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button'


const RemoveProductPopup = (props) => {

  const {open,onCancel,onSave} = props;

  return (
    <Dialog open={open}>
        <DialogTitle>
            Confirmation 
        </DialogTitle>
        <DialogContent>
            Are you sure you want to Remove this Product ?
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
                onClick={() => onSave()}>
                    REMOVE 
                </Button>
        </DialogActions>
    </Dialog>
  )
}

export default RemoveProductPopup