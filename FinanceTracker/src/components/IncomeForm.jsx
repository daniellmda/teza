import React, { useState } from "react";
const IncomeForm = () => {
  const [income, setIncome] = useState(0);
  return (
    <>
      <form className="bg-white rounded shadow-md">
        <label className="block font-bold mb-2">Add income:</label>
        <input
          type="number"
          value=""
          onChange={(e) => setIncome(Number(e.target.value))}
          className="w-full p-2 border rounded"
        />
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </>
  );
};
export default IncomeForm;
