import React, {useState} from 'react';
import styles from './Expenses.module.scss';
import Card from '../UI/Card/Card';
import ExpenseFilter from './ExpenseFilter/ExpenseFilter';
import ExpensesList from './ExpenseList/ExpenseList';
import ExpensesChart from './ExpensesChart/ExpensesChart';

const Expenses = ({expenses}) => {

    const [selectedYear, setSelectedYear] = useState('2021');

    const handleYearSelected = (year) => {
        setSelectedYear(year);
    };

    const filteredExpenses = expenses.filter(item => item.date.getFullYear().toString() === selectedYear);

    return (
        <Card className={styles.expenses}>
            <ExpenseFilter onYearSelect={handleYearSelected} selected={selectedYear}/>
            <ExpensesChart filteredExpenses={filteredExpenses}/>
            <ExpensesList filteredExpenses={filteredExpenses}/>
        </Card>
    );
}

export default Expenses;