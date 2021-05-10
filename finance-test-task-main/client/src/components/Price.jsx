import s from '../styles/Price.module.css';

function Price(props) {
    return (
        <div className={s.price}>
            {'$ ' + props.price}
        </div>
    )
}

export default Price;