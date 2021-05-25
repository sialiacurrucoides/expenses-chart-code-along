import styles from './StudyDate.module.scss';

const StudyDate = ({date}) => {
    const month = date.toLocaleString('en-GB', {month: 'long'});
    const day = date.toLocaleString('en-GB', {day: '2-digit'});
    const year = date.getFullYear();
    return (<div className={styles['Study-date']}>
        <div className={styles['Study-date__month']}>{month}</div>
        <div className={styles['Study-date__day']}>{day}</div>
        <div className={styles['Study-date__year']}>{year}</div>
    </div>);
}

export default StudyDate;