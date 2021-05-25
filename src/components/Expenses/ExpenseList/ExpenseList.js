import ExpenseItem from '../ExpenseItem/ExpenseItem';
import styles from './ExpenseList.module.scss';

const ExpensesList = ({filteredExpenses}) => {
    let expensesContent = <p className={styles["expenses-list__fallback"]}>No expenses found.</p>;

    if (!filteredExpenses || filteredExpenses.length === 0){
        return <h2 className={styles["expenses-list__fallback"]}>No expenses found.</h2>
    }
    expensesContent = filteredExpenses.map(expense => <ExpenseItem key={expense.id} expense={expense} />)

    return (<ul className={styles["expenses-list"]}>
                {expensesContent}
            </ul>);
};

export default ExpensesList;