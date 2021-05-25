import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const dummy_expenses = [
  { id: 'e1', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 3,12)},
  { id: 'e2', title: 'Toilet paper', amount: 94.67, date: new Date(2022, 4,12)},
  { id: 'e3', title: 'New table', amount: 594.67, date: new Date(2020, 3,18)},
  { id: 'e4', title: 'New computer', amount: 1694.67, date: new Date(2021, 4,22)},
];

function App() {
  const [expenses, setExpenses] = useState(dummy_expenses);

  const addExpenseHandler = expense => {
    setExpenses(prev => ([
      expense,
      ...prev,
    ]))
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
