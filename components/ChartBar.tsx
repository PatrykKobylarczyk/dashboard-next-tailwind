import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Finance",
    },
  },
};

const data = {
  responsive: true,
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

  datasets: [
    {
      label: "Budget",
      data: [20, 25, 37, 25, 42, 13],
      backgroundColor: "#6366F1",
    },
    {
      label: "Total Profit",
      data: [5, 12, 33, 24, 32, 6],
      backgroundColor: "#D8D9FB",
    },
  ],
};

const ChartBar = () => {
  return <Bar data={data} width={"100%"} height={"100%"} options={options} />;
};

export default ChartBar;
