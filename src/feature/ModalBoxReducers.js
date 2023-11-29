import { Typography } from "@mui/material";
import {createSlice} from "@reduxjs/toolkit";
// nanoid // this can be use assign or create a ID for actions 
const initialState = {
    open : false,
    content : "No Content"
}

// this is the Slice OBJ
export const ModalBox = createSlice({
    name : "slice",
    initialState,
    reducers : {
        openModal : (state,action)=>{
            state.open = action.payload
        },
        closeModal : (state,action)=>{
            state.open = action.payload
        },
        addContent : (state,action)=>{
            state.content = action.payload;
        },
        resetModal : (state,action)=>{
            state.content = "No Content"
        }
    }
})

// for actions exporting only
export const {openModal,closeModal,resetModal,addContent} = ModalBox.actions;
// as default its exports the whole reducers
export default ModalBox.reducer