import React from "react";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "Toilet Paper",
      amount: 70.34,
      date: new Date(2020, 2, 28),
    },
    {
      id: "e3",
      title: "New TV",
      amount: 123,
      date: new Date(2020, 12, 28),
    },
    {
      id: "e4",
      title: "House Door",
      amount: 70,
      date: new Date(2021, 1, 14),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
