
import s from '../styles/App.module.css';
import Ticker from './Ticker';

function App(props) {
  
  const tickers = props.state.tickers;
  const backgound = props.state.backgound;


  let table = tickers.map((item, index) => {
    return <Ticker 
    key={item.ticker} 
    ticker={item} 
    color={backgound[index]}
    />
  });

  return (
    <div className={s.content}>
     { table }
    </div>
  );
}

export default App;
