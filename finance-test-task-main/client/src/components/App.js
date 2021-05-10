import s from '../styles/App.module.css';
import Ticker from './Ticker';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { wsConnect } from "../modules/websocket";


function App({ tickers, background, isIncreased }) {

  let table = tickers.map((item, index) => {
    return <Ticker
      key={item.ticker}
      ticker={item}
      color={background[index]}
      vector={isIncreased[index]}
    />
  });

  return (
    <div className={s.content}>
      {table}
    </div>
  );
}

App.propTypes = {
  tickers: PropTypes.array,
  background: PropTypes.array,
  dispatch: PropTypes.func,
  isIncreased: PropTypes.array,
};

const mapStateToProps = (state, ownProps) => {
  const { tickers, background, isIncreased } = state.tickersState;

  return {
    tickers: tickers || [],
    background: background || [],
    isIncreased: isIncreased || [],
  }
};

const mapDispatchToProps = (dispatch) => {

  dispatch(wsConnect(`ws://localhost:4000`));

  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
