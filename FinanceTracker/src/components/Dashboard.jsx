import React from "react";
import IncomeForm from "./IncomeForm";
import ExpenseForm from "./ExpenseForm";
import SummaryCard from "./SummaryCard";
const Dashboard = () => {
  return (
    <>
      <div className="dashboard p-6 bg-gradient-to-r from-blue-400 to-purple-100 min-h-screen">
        <header className="mb-6 text-center">
          <h1 className="text-5xl font-extrabold text-purple-700">
            Personal Finance Tracker
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Track your incomes and expenses
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <IncomeForm />
          <ExpenseForm />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <SummaryCard title="Total Income" value="" />
          <SummaryCard title="Total Expenses" value="" />
          <SummaryCard title="Remaining Budget" value="" />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
