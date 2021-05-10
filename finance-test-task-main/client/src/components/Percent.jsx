import ArrowDown from "./ArrowDown";
import ArrowUp from "./ArrowUp";
import s from '../styles/Percent.module.css';

function Percent(props) {
    return (
        <div className={props.vector ? s.green: s.red}>
            {(props.vector) ? <ArrowUp /> : <ArrowDown />}
            {props.percent + ' %'}
        </div>
    )
}

export default Percent;