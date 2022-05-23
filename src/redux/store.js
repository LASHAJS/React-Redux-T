import {configureStore} from "@reduxjs/toolkit";
import contactSlice from "./reducers/contactReducer";
import  authSlice  from "./reducers/AuthReducer";

const store = configureStore({
    reducer:{
        contact:contactSlice,
        auth:authSlice,
    }
});
export  default store;