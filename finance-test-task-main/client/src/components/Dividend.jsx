import s from '../styles/Dividend.module.css';

function Dividend(props) {
    return (
        <div className={props.vector ? s.green : s.red}>
            {props.dividend}
        </div>
    )
}

export default Dividend;