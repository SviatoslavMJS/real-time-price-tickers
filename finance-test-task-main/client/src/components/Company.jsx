import s from '../styles/Company.module.css';

function Company(props) {

    return (

        <div style={{ backgroundColor: props.color }} className={s.ticker}>
            {props.ticker}
        </div>

    )
}

export default Company;