import React from 'react';
import styles from './NewExpense.module.scss';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({onAddExpense}) => {
    const onSaveExpenseDataHandler = (enteredExpensData) => {
        const expenseData = {
            ...enteredExpensData,
            id: Math.random().toString,
        };
        onAddExpense(expenseData);
    };

    return (<div className={styles['new-expense']}>
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
    </div>);
};

export default NewExpense;