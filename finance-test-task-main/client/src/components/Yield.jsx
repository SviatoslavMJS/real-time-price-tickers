import s from '../styles/Yield.module.css';
import ArrowDown from './ArrowDown';

function Yield(props) {

    return (
        <div className={true? s.yieldGreen : s.yieldRed}>
            {props.yield}
        </div>
    )
}

export default Yield;