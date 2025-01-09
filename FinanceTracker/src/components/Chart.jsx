import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "Chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ data }) => {
  const chartData = {
    labels: data.map((exp) => exp.category),
    datasets: [
      {
        data: data.map((exp) => exp.category),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "a pie chart example",
      },
    },
  };

  const hasData = data.length > 0 && data.some((exp) => exp.amount > 0);
  return (
    <>
      <div className="mt-6 bg-white p-6 rounded shadw-md">
        <h2 className="text-xl font-bold mb-4 flex justify-center">
          Expense Breakdown
        </h2>
        {hasData ? (
          <div className="flex flex-row justify-center h-96">
            <Pie data={chartData} />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mb-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 3L6.75 6H4.25a2.25 2.25 0 00-2.25 2.25v11.5A2.25 2.25 0 004.25 22h15.5a2.25 2.25 0 002.25-2.25v-11.5A2.25 2.25 0 0019.75 6h-2.5l-3-3H9.75z"
              />
            </svg>
            <p>
              No expense data available. Start adding your expenses to see the
              chart!
            </p>
          </div>
        )}
      </div>
    </>
  );
};
export default Chart;
