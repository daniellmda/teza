import React from "react";
import IncomeForm from "./IncomeForm";

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
        </div>
      </div>
    </>
  );
};

export default Dashboard;
