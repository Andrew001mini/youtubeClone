import { createSlice } from "@reduxjs/toolkit";

const checkingSlice=createSlice({
    name: "Check",
    initialState: {
    },
    reducers:{
        addData: (state,action)=>{
            state=Object.assign(state,action.payload);
        }
    }
})
export const {addData}=checkingSlice.actions;
export default checkingSlice.reducer;