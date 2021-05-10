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

    return (
        <div className={s.container}>
            <Company ticker={ticker.ticker} color={color} />
            <Exchange exchange={ticker.exchange} />
            <Price price={ticker.price} />
            <Change change={ticker.change} />
            <Percent percent={ticker.change_percent} />
            <Dividend dividend={ticker.dividend} />
            <Yield yield={ticker.yield} />
        </div>
    )
}

export default Ticker;