const redux=require('redux')
const produce= require('immer').produce
//immer helps to state updation
const initialState={
    nsme:'Dayananda',
    address:{
        street:'123 Main St',
        city:"Bangalore",
        state:"Kar"
    },
}
const STREET_UPDATED='STREET_UPDATED'
const updateStreet=(street)=>{
    return{
        type :STREET_UPDATED,
        payload:street,
    }
}
const reducer=(state=initialState, action)=>{
    switch(action.type){
        case STREET_UPDATED:
            // return {
            //     ...state,
            //     address:{
            //         ...state.address,
            //         street: action.payload,
            //     },
            // }

            //
            return produce(state, (draft)=>{
                draft.address.street=action.payload
            })
            default:{
                return state
            }
    }
}
const store=redux.createStore(reducer)
console.log("Initial State ", store.getState())
const unsubscribe=store.subscribe(()=>{
    console.log("updated State ", store.getState())
})
store.dispatch(updateStreet("456 MAin st"))
unsubscribe()