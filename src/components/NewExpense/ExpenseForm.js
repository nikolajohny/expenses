import React, { useState } from "react";

import "../NewExpense/ExpenseForm.css";

const ExpenseForm = (props) => {
  // ne mora se 3 puta odvojeno pozivati useState, vec moze samo jednom kao u primeru ispod, prvi nacin se cesce vidi u praski nego drugi nacin.

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setenteredAmount] = useState("");
  const [enteredDate, setenteredDate] = useState("");

  //   const [userInput, setUserInpuit] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: ''
  //   })

  const titleChangeHandler = (event) => {
    // prvi nacin

    setEnteredTitle(event.target.value);

    // drugi nacin

    // setUserInpuit({
    //     ...userInput,
    //     enteredTitle: event.target.value,
    // })

    // treci nacin

    // setUserInpuit((prevState) => {
    //     return {...prevState, enteredTitle: event.target.value };
    // })
  };

  const amountChangeHandler = (event) => {
    setenteredAmount(event.target.value);
    // setUserInpuit({
    //     ...userInput,
    //     enteredAmount: event.target.value,
    // })
    // setUserInpuit((prevState) => {
    //     return {...prevState, enteredAmount: event.target.value };
    // })
  };

  const dateChangeHandler = (event) => {
    setenteredDate(event.target.value);
    // setUserInpuit({
    //     ...userInput,
    //     enteredDate: event.target.value,
    // })
    // setUserInpuit((prevState) => {
    //     return {...prevState, enteredDate: event.target.value };
    // })
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseDate = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

	props.onSaveExpenseDate(expenseDate);
    setEnteredTitle("");
    setenteredAmount("");
    setenteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
