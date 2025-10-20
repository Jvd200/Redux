import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import{ ordered as cakeOrderes} from '../cake/cakeSlice'

type InitialState={
    numOfIcecreams:number
}

const initialState : InitialState={
    numOfIcecreams:20
}
const icecreamSlice=createSlice({
    name:'icecream',
    initialState,
    
        reducers:{
            ordered:(state)=>{
                state.numOfIcecreams--
            },
            restocked:(state, action:PayloadAction<number>)=>{
                state.numOfIcecreams+=action.payload
            }
        },
        // two ways to do extea reducer
        // main concept buy 1 cake get 1 iceCream free and vicea varsa
        extraReducers:(builder)=>{
            builder.addCase(cakeOrderes, (state)=>{
            state.numOfIcecreams--

            })
           

        }
    
})
export default icecreamSlice.reducer;
export const {ordered, restocked} = icecreamSlice.actions;