import React, { useState } from 'react';
import styles from './ExpenseForm.module.scss';

const ExpenseForm = ({onSaveExpenseData}) => {

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const [open, setOpen] = useState(false);

    const titleChangeHandler = (event) => {
        setUserInput(prev => ({
            ...prev,
            enteredTitle: event.target.value}));
    };
    const amountChangeHandler = (event) => {
        setUserInput(prev => ({
            ...prev,
            enteredAmount: event.target.value}));
    };
    const dateChangeHandler = (event) => {
        setUserInput(prev => ({
            ...prev,
            enteredDate: event.target.value}));
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: new Date(),
        };
        onSaveExpenseData(expenseData);
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: '',
        })
    };

    return (
        open ? 
        (<form onSubmit={submitHandler}>
        <div className={styles['new-expense__controls']}>
            <div className={styles['new-expense__control']}>
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} value={userInput.enteredTitle}/>
            </div>
            <div className={styles['new-expense__control']}>
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={userInput.enteredAmount}/>
            </div>
            <div className={styles['new-expense__control']}>
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={userInput.enteredDate}/>
            </div>
            <div className={styles['new-expense__actions']}>
                <button type="submit" onClick={() => setOpen(prev => !prev)}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </div>
    </form>) : (
        <div className={styles['new-expense__actions']}>
            <button type="submit" onClick={() => setOpen(prev => !prev)}>Add Expense</button>
        </div>
    ));
};

export default ExpenseForm;