
const redux = require('redux');
const createStore=redux.createStore;


//action
const CAKE_ORDERED= "CAKE_ORDERED"

function orderCake(){
    return{
        type: CAKE_ORDERED,
        quantity:1
    }
}

const initialState={
    numOfCakes: 10
}
// reducer
// (PreviousState, action)=>newState

const reducer=(state=initialState, action)=>{
    switch(action.type){
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes-1,
            };
            default:
                return state
    }
}

//store

const store=createStore(reducer)// reduser takes initial state and store in a variable

console.log('Initial state ', store.getState())//getstate is built-in method  it handle reducer

const unsubscribe=store.subscribe(()=>  //subscribe is in-built method
console.log('Updated state ', store.getState())
)
store.dispatch(orderCake())//dispatch in-built method to update new value
store.dispatch(orderCake())
store.dispatch(orderCake())

unsubscribe()
