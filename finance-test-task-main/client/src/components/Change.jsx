import ArrowDown from "./ArrowDown";
import ArrowUp from "./ArrowUp";
import s from '../styles/Change.module.css';

function Change(props) {
    return (
        <div className={s.change}>
            {(true) ? <ArrowUp /> : <ArrowDown />}
            {props.change}
        </div>
    )
}

export default Change;