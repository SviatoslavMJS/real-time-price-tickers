import { combineReducers, createStore } from "redux";
import { tickersReducer } from "./tickersReducer";

 

 
 
 let reducers = combineReducers ({
  tickersState: tickersReducer
});

let store = createStore(reducers);




export default store;