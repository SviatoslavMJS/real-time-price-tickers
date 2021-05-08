

import { backgound, initialState } from '../redux/state';
import s from '../styles/App.module.css';
import Ticker from './Ticker';

function App() {

 console.log(initialState);

  let tickers = initialState.map((ticker, index) => {
    return <Ticker 
    key={ticker.ticker} 
    ticker={ticker} 
    color={backgound[index]}
    />
  });

  return (
    <div className={s.content}>
     { tickers }
    </div>
  );
}

export default App;
