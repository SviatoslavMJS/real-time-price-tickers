import s from '../styles/Dividend.module.css';

function Dividend(props) {
    return (
        <div className={s.dividend}>
            {props.dividend}
        </div>
    )
}

export default Dividend;