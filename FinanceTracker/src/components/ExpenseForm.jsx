import React, { useState } from "react";
const ExpenseForm = () => {
  const [expense, setExpense] = useState({ category: "", amount: 0 });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className="bg-white p-4 rounded shadow-md" onSubmit={handleSubmit}>
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
          onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </>
  );
};
export default ExpenseForm;
