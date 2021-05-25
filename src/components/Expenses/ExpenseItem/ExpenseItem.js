import React from 'react';
import styles from './ExpenseItem.module.scss';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../../UI/Card/Card';

const ExpenseItem = ({expense}) => {

    return (
        <li>
        <Card className={styles['expense-item']}>
            <ExpenseDate date={expense.date}/>
            <div className={styles['expense-item__description']}>
                <h2>{expense.title}</h2>
                <div className={styles['expense-item__price']}>${expense.amount}</div>
            </div>
        </Card>
        </li>
    );
}

export default ExpenseItem;