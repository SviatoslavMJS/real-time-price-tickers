import s from '../styles/ArrowDown.module.css';

function ArrowDown() {
    return (
        <svg className={s.svg_down}>
            <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
        </svg>
    )
}

export default ArrowDown;