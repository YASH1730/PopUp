import {configureStore} from "@reduxjs/toolkit";
// importing the reducers 
import Slice from "../feature/Slice";
// for persisting the reducers States 
import {combineReducers} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
    version : 1,
    storage,
    key : 'root'
}

const reducer = combineReducers({
    Slice
})

const persistState = persistReducer(persistConfig,reducer)

// configuring Store
export  const store = configureStore({
    reducer : persistState,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})