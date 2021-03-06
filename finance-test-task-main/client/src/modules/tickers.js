const UPDATE_TICKERS = "UPDATE_TICKERS";

export const updateTickers = json => ({ type: UPDATE_TICKERS, payload: json });

let initialState = {
    tickers: [
        { "ticker": "AAPL", "exchange": "NASDAQ", "price": 279.29, "change": 64.52, "change_percent": 0.84, "dividend": 0.56, "yield": 1.34, "last_trade_time": "2021-04-30T11:53:21.000Z" },
        { "ticker": "GOOGL", "exchange": "NASDAQ", "price": 237.08, "change": 154.38, "change_percent": 0.10, "dividend": 0.46, "yield": 1.18, "last_trade_time": "2021-04-30T11:53:21.000Z" },
        { "ticker": "MSFT", "exchange": "NASDAQ", "price": 261.46, "change": 161.45, "change_percent": 0.41, "dividend": 0.18, "yield": 0.98, "last_trade_time": "2021-04-30T11:53:21.000Z" },
        { "ticker": "AMZN", "exchange": "NASDAQ", "price": 260.34, "change": 128.71, "change_percent": 0.60, "dividend": 0.07, "yield": 0.42, "last_trade_time": "2021-04-30T11:53:21.000Z" },
        { "ticker": "FB", "exchange": "NASDAQ", "price": 266.77, "change": 171.92, "change_percent": 0.75, "dividend": 0.52, "yield": 1.31, "last_trade_time": "2021-04-30T11:53:21.000Z" },
        { "ticker": "TSLA", "exchange": "NASDAQ", "price": 272.13, "change": 158.76, "change_percent": 0.10, "dividend": 0.96, "yield": 1.00, "last_trade_time": "2021-04-30T11:53:21.000Z" }
    ],
    background: ['#E31937', '#0231a0', '#d55e00', '#666666', '#50912a', '#0d0a08', '#1c8bbb'],
    isIncreased: [true, true, true, true, true, true],
};

export const tickersReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_TICKERS: {

            let isIncreasedCopy = [...state.isIncreased];
            const prewTickers = [...state.tickers];
            const nextTickers = [...action.payload];

            for (let i = 0; i < prewTickers.length; i++) {
                nextTickers[i].price > prewTickers[i].price ? isIncreasedCopy[i] = true : isIncreasedCopy[i] = false
            }

            return { ...state, tickers: action.payload, isIncreased: isIncreasedCopy }
        }
        default: return state
    }
}



