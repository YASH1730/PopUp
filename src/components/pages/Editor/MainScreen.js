import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import SideNav from '../../layout/Sidenav.js';
import { useDispatch, useSelector } from 'react-redux';
import { addContent, openModal } from '../../../feature/ModalBoxReducers.js';
import ModalBox from '../../layout/ModalBox.js';

const MainScreen = () => {
  const state = useSelector(state=>state)
    return (
      <>
      {console.log(state)}
      <Grid container >
        <Grid item xs={2}>
            <SideNav DisplayComponent = {MainContainer}></SideNav>
            <MainContainer2></MainContainer2>
        </Grid>
      </Grid>
      </>
    );
}

function MainContainer() {
  const dispatch = useDispatch();
 
  function handleModal(){
    dispatch(openModal(true))
 }
 return(<>
   <Button variant='contained' onClick={handleModal}>Open</Button>
   <ModalBox content={<Typography variant='h2'>Yashwant Sahu</Typography>} />
 </>) 
}
function MainContainer2() {
  const dispatch = useDispatch();
 
  function handleModal(){
    dispatch(openModal(true))
 }
 return(<>
   <Button variant='contained' onClick={handleModal}>Open</Button>
   <ModalBox content={<Typography variant='h2'>Yashwant Sahu 2</Typography>} />
 </>) 
}

export default MainScreen;
