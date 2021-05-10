import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from "./reducers";
import websocketMiddleware from '../middleware/websocketMiddleware';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(reduxThunk, websocketMiddleware),
    ),
);

export default store;
