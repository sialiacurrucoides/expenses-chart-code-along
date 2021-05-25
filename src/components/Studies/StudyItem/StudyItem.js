import React from 'react';
import styles from './StudyItem.module.scss';
import StudyDate from '../StudyDate/StudyDate';
import Card from '../../UI/Card/Card';

const StudyItem = ({study}) => {

    return (
        <li>
        <Card className={styles['study-item']}>
            <StudyDate date={study.date}/>
            <div className={styles['study-item__description']}>
                <h2>{study.title}</h2>
                <div className={styles['study-item__price']}>{study.amount} min.</div>
            </div>
        </Card>
        </li>
    );
}

export default StudyItem;