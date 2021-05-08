import s from "../styles/Ticker.module.css";

function Ticker (props) {

    const ticker = props.ticker;
    const color = props.color;

    return (
        <div className={s.container}>

            <div style={{ backgroundColor: color }} className={s.ticker}>{ticker.ticker}</div>
            <div className={s.exchange}>{ticker.exchange}</div>
            <div className={s.price}>{'$ ' + ticker.price}</div>
            <div className={s.change}>
                <svg className={s.svg_up}>
                    <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
                </svg>{ticker.change}</div>
            <div className={s.percent}>
                <svg className={s.svg_down}>
                    <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
                </svg>{ticker.change_percent + ' %'}</div>
            <div className={s.dividend}>{ticker.dividend}</div>
            <div className={s.yield}>{ticker.yield}</div>

        </div>
    )
}

export default Ticker;