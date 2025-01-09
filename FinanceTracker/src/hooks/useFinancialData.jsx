import React, { useCallback, useMemo, useState } from "react";
const useFinancialData = () => {
  // consts
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState([]);

  const addIncome = useCallback((amount) => setIncome(amount), []);

  const addExpense = useCallback((expense) => {
    console.log("addExpense function created!");
    setExpenses((prev) => [...prev, expense]);
  }, []);
  // const addExpense = (expense) => {
  //   console.log("addExpense function created!");
  //   setExpenses((prev) => [...prev, expense]);
  // };

  // const totalExpenses = expenses.reduce((total, exp) => total + exp.amount, 0);
  // console.log("total expenses calculated");

  const totalExpenses = useMemo(() => {
    return expenses.reduce((total, exp) => total + exp.amount, 0);
  }, [expenses]);

  const remainingBudget = useMemo(
    () => income - totalExpenses,
    [income, totalExpenses]
  );
  return {
    income,
    expenses,
    totalExpenses,
    remainingBudget,
    addIncome,
    addExpense,
  };
};
export default useFinancialData;
