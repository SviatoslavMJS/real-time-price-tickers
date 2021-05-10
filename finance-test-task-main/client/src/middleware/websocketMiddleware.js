import * as actions from '../modules/websocket';
import { io } from "socket.io-client";
import { updateTickers } from '../modules/tickers';


const websocketMiddleware = () => {
    let socket = null;

    const onOpen = store => () => {
        store.dispatch(actions.wsConnected());
    };

    const onClose = store => () => {
        store.dispatch(actions.wsDisconnected());
    };

    return store => next => (action) => {
        switch (action.type) {
            case 'WS_CONNECT':
                if (socket) {
                    return;
                }

                // connect to the remote host
                socket = io.connect(action.host, { transports: ["websocket"] });
                socket.on("connect", onOpen(store));
                socket.on("disconnect", onClose(store));
                socket.on("ticker", (payload) => {
                    store.dispatch(updateTickers(payload))
                });
                // start tracking
                break;
            case 'WS_CONNECTED':
                socket.emit("start");
                break;
            case 'WS_DISCONNECT':
                if (socket !== null) {
                    socket.close();
                }
                socket = null;
                break;
            default:
                return next(action);
        }
    };
};

export default websocketMiddleware();
