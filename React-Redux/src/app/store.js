import {configureStore} from '@reduxjs/toolkit'
import cakeReducer from '../features/cake/cakeSlice' 
import IcecremReducer from '../features/Icecream/icecreamSlice'
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