import { Grid } from '@mui/material';
import React from 'react';
import SideNav from '../../layout/Sidenav.js';

const MainScreen = () => {
    return (
      <>
      <Grid container >
        <Grid item xs={2}>
            <SideNav DisplayComponent = {MainContainer}></SideNav>
        </Grid>
      </Grid>
      </>
    );
}

function MainContainer(params) {
 return(<>
 
 </>) 
}

export default MainScreen;
