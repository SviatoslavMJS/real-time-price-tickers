import s from "../styles/Ticker.module.css";
import Change from "./Change";
import Company from "./Company";
import Dividend from "./Dividend";
import Exchange from "./Exchage";
import Percent from "./Percent";
import Price from "./Price";
import Yield from "./Yield";

function Ticker(props) {

    const ticker = props.ticker;
    const color = props.color;
    const vector = props.vector;

    return (
        <div className={s.container}>
            <Company ticker={ticker.ticker} color={color} />
            <Exchange exchange={ticker.exchange} />
            <Price price={ticker.price} />
            <Change change={ticker.change} vector={vector} />
            <Percent percent={ticker.change_percent} vector={vector} />
            <Dividend dividend={ticker.dividend} vector={vector} />
            <Yield yield={ticker.yield} vector={vector} />
        </div>
    )
}

export default Ticker;