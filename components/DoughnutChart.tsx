import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

 const options = {
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: "Customers",
    },
  },
};

const data = {
  labels: ["New", "Current", "Lost"],
  datasets: [
    {
      label: "Customers",
      data: [97, 119, 13],
      backgroundColor: [
        "#10B981",
        "#7465ff",
        "#F79009",
      ],
    },
  ],
  plugins: {
    title: {
      display: true,
      text: "Chart.js Horizontal Bar Chart",
    },
  },
};

const DoughnutChart = () => {
  return <Doughnut data={data} width={"100%"} height={"100%"} options={options} />;
};

export default DoughnutChart;
