import { combineReducers } from 'redux';
import { websocketReducer } from './websocket';
import { tickersReducer } from "./tickers";

const rootReducer = combineReducers({
    websocketState: websocketReducer,
    tickersState: tickersReducer,
});

export default rootReducer;
