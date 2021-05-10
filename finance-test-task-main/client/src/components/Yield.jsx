import s from '../styles/Yield.module.css';

function Yield(props) {

    return (
        <div className={props.vector ? s.yieldGreen : s.yieldRed}>
            {(props.vector ? '+ ' : '- ') + props.yield}
        </div>
    )
}

export default Yield;