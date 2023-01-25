import React from "react";

import "../NewExpense/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveExpenseDatehandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

  return <div className="new-expense">
      <ExpenseForm onSaveExpenseDate={saveExpenseDatehandler} />
  </div>;
};

export default NewExpense;
