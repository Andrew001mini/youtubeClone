import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./menuSlice";
import checkReducer from "./checkingSlice";
const store=configureStore({
    reducer: {
        user: userReducer,
        Check: checkReducer,
    }
})
export default store;