import {createSlice} from "@reduxjs/toolkit";
// nanoid // this can be use assign or create a ID for actions 
const initialState = {
    test : []
}

// this is the Slice OBJ
export const Slice = createSlice({
    name : "slice",
    initialState,
    reducers : {
        addModalBox : (state,action)=>{
            state.test.push(action.payload)
        }
    }
})

// for actions exporting only
export const {addModalBox} = Slice.actions;
// as default its exports the whole reducers
export default Slice.reducer