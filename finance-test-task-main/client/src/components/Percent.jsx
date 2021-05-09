import ArrowDown from "./ArrowDown";
import ArrowUp from "./ArrowUp";
import s from '../styles/Percent.module.css';

function Percent(props) {

    return (
        <div className={s.percent}>
            {(false) ? <ArrowUp /> : <ArrowDown />} 
            {props.percent + ' %'}
        </div>
    )
}

export default Percent;