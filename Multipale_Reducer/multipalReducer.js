//multipale Reducer
//each reducer managing its own part of the application global state
const redux = require('redux');
const createStore=redux.createStore;
const bindActionCreators=redux.bindActionCreators // working with dispatch
const combineReducers =redux.combineReducers  //Multipale reducer

//action
const CAKE_ORDERED= "CAKE_ORDERED"
const CAKE_RESTOCKED= 'CAKE_RESTOCKED'
const ICECREM_ORDERD= 'ICECREM_ORDERD'
const ICECREM_RESTOCKED='ICECREM_RESTOCKED'

function orderCake(){
    return{
        type: CAKE_ORDERED,
        payload:1
    }
}
function restockCake(qty=1){
    return {
        type: CAKE_RESTOCKED,
        payload:qty,
    }
}
function orderIcecrem(qty=1){
    return{
        type:ICECREM_ORDERD,
        payload:qty,
    }
}
function restockIcecrem(qty=1){
    return{
        type:ICECREM_RESTOCKED,
        payload:qty,
    }
}

// const initialState={
//     numOfCakes: 10,
//     numOfIcecrem:20
// }
const initialCakeState={
    numOfCakes:10
}
const initialIcecrem={
    numOfIcecrem:20
}
// reducer
// (PreviousState, action)=>newState

const cakeReducer=(state=initialCakeState, action)=>{
    switch(action.type){
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes-1,
            };
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes +action.payload
            };
            
        case ICECREM_ORDERD:
            return {
                ...state,
                numOfIcecrem: state.numOfIcecrem-action.payload,
            };
        case ICECREM_RESTOCKED:
            return {
                ...state,
                numOfIcecrem: state.numOfIcecrem +action.payload
            }
            default:
                return state
    }
}
const IcecremReducer=(state=initialIcecrem, action)=>{
    switch(action.type){
       
case ICECREM_ORDERD:
            return {
                ...state,
                numOfIcecrem: state.numOfIcecrem-action.payload,
            };
        case ICECREM_RESTOCKED:
            return {
                ...state,
                numOfIcecrem: state.numOfIcecrem +action.payload
            }
            default:
                return state
    }
}
//combine

const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:IcecremReducer
})


//store

const store=createStore(rootReducer)// reduser takes initial state and store in a variable

console.log('Initial state ', store.getState())//getstate is built-in method  it handle reducer

const unsubscribe=store.subscribe(()=>  //subscribe is in-built method
console.log('Updated state ', store.getState())
)
store.dispatch(orderCake())//dispatch in-built method to update new value
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(restockCake(4))

const actions=bindActionCreators({orderCake, restockCake, orderIcecrem, restockIcecrem},store.dispatch)
//another way to dispatch
actions.orderCake()
actions.restockCake(3)
actions.orderIcecrem()
actions.orderIcecrem()
actions.restockIcecrem(2)
unsubscribe()

