import { createSlice } from "@reduxjs/toolkit";

const menuSlice=createSlice({
    name: "user",
    initialState: {isLogin: "true"},
    reducers: {
        addMenu: (state)=>{
            state.isLogin=!state.isLogin
        },
        closeMenu: (state)=>{
            state.isLogin=false;
        }
    }
})
export const {addMenu,closeMenu}=menuSlice.actions;
export default menuSlice.reducer;