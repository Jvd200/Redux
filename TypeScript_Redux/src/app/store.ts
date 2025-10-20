import {configureStore} from '@reduxjs/toolkit'
import cakeReducer from '../features/cake/cakeSlice' 
import IcecremReducer from '../features/icecream/icecreamSlice'
import userReducer from '../features/users/userSlice'
//const reduxLogger=require('redux-logger')

//const logger=reduxLogger.createLogger()
const store=configureStore({
    reducer:{
        cake:cakeReducer,
        icecream:IcecremReducer,
        user:userReducer
    },
//middleware:(getDefaultMiddleware)=>{ return getDefaultMiddleware().concat(logger)}
})

export default store;
export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch