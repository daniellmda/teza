import React, { useState } from "react";
const ExpenseForm = ({ onAddExpense }) => {
  const [expense, setExpense] = useState({ category: "", amount: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense({
      category: expense.category,
      amount: expense.amount === "" ? 0 : Number(expense.amount),
    });
  };

  return (
    <>
      <form
        className="bg-white p-4 rounded shadow-md"
        placeholder="0"
        onSubmit={handleSubmit}
      >
        <label className="block font-bold mb-2">Add Expense:</label>
        <input
          type="text"
          value={expense.category}
          placeholder="Category"
          onChange={(e) => setExpense({ ...expense, category: e.target.value })}
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="number"
          value={expense.amount}
          onChange={(e) =>
            setExpense({ ...expense, amount: Number(e.target.value) })
          }
          className="w-full p-2 border rounded"
          placeholder="0"
        />
        <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </>
  );
};
export default ExpenseForm;
