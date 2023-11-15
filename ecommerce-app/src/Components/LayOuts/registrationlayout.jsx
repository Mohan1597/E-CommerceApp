import React from 'react';
import { Grid } from '@mui/material';
import { backgroundblue } from './styles';

const Registrationlayout = ({ children }) => {
  return (
    <Grid container spacing={0}>
      <Grid xs={12} md={6} style={backgroundblue}>
        {/* Your content for the left grid goes here */}
      </Grid>
      <Grid xs={12} md={6}>
        {children}
      </Grid>
    </Grid>
  );
};

export default Registrationlayout;
