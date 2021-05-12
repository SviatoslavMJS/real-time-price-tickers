import s from '../styles/Exchange.module.css';

function Exchange(props) {
    return (
        <div className={s.exchange}>
            {props.exchange}
        </div>
    )
}

export default Exchange;