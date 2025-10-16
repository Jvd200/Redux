const { createSlice } = require('@reduxjs/toolkit')
const { ordered } = require('../cake/cakeSlice').cakeActions 

const initialState={
    numOfIcecreams:20
}
const icecreamSlice=createSlice({
    name:'Icecream',
    initialState,
    
        reducers:{
            ordered:(state)=>{
                state.numOfIcecreams--
            },
            restocked:(state, action)=>{
                state.numOfIcecreams+=action.payload
            }
        },
        // two ways to do extea reducer
        // main concept buy 1 cake get 1 iceCream free and vicea varsa
        extraReducers:(builder)=>{
            builder.addCase(cakeActions.ordered, (state)=>{
            state.numOfIcecreams--

            })
           

        }
    
})

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;