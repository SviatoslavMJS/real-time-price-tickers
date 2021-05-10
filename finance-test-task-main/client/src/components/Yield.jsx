import s from '../styles/Yield.module.css';

function Yield(props) {
    return (
        <div className={false ? s.yieldGreen : s.yieldRed}>
            {'+ ' + props.yield}
        </div>
    )
}

export default Yield;