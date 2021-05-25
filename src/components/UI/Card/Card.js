import styles from './Card.module.scss';

const Card = ({children, className}) => {
    const classes = `${styles.card} ${className}`;
    return (<div className={classes}>{children}</div>);
}

export default Card;