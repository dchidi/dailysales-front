import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// const data = {
//   labels: [
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "11",
//     "12",
//     "13",
//     "14",
//     "15",
//     "16",
//     "17",
//     "18",
//     "19",
//     "20",
//     "21",
//     "22",
//     "23",
//     "24",
//     "25",
//     "26",
//     "27",
//     "28",
//     "29",
//     "30",
//     "31",
//   ], // Example labels
//   datasets: [
//     {
//       label: "2024",
//       data: [0, 50, 120, 180, 240, 300, 350, 400, 450, 500], // Example data
//       fill: false,
//       borderColor: "rgba(255, 198, 88)",
//       backgroundColor: "rgba(255, 198, 88, 0.5)",
//       tension: 0.1,
//     },
//     {
//       label: "2023",
//       data: [0, 40, 100, 160, 220, 280, 320, 370, 420, 480], // Example data
//       fill: false,
//       borderColor: "rgba(255, 99, 132, 1)",
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//       tension: 0.1,
//     },
//   ],
// };

type ChartData = {
  label: string;
  data: number[];
  fill: boolean;
  borderColor: string;
  backgroundColor: string;
  tension: number;
};

interface IChartData {
  labels: string[];
  datasets: ChartData[];
}
const generateData = (
  days_in_month: number,
  current_year_data: number[],
  previous_year_data: number[],
  curr_year_label: string,
  prev_year_label: string
): IChartData => {
  const labels = Array.from({ length: days_in_month }, (_, i) =>
    (i + 1).toString()
  );

  return {
    labels,
    datasets: [
      {
        label: curr_year_label,
        data: current_year_data,
        fill: false,
        borderColor: "rgba(255, 198, 88)",
        backgroundColor: "rgba(255, 198, 88, 0.5)",
        tension: 0.1,
      },
      {
        label: prev_year_label,
        data: previous_year_data,
        fill: false,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0.1,
      },
    ],
  };
};

const options = {
  responsive: true,
  maintainAspectRatio: false, // Disable aspect ratio to let the chart fill the container
  plugins: {
    legend: {
      position: "bottom" as const,
      labels: {
        color: "#bbb", // Change the color of the legend text to white
      },
    },
    title: {
      display: true,
      text: "Daily Sales Trend",
      color: "#fff", // Title color
      font: {
        family: "Figtree", // Customize the font family
        size: 20, // Customize the font size
        weight: "normal" as const, // You can also adjust font weight
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#bbb", // X-axis labels color
      },
      grid: {
        color: "#888", // X-axis grid lines color
      },
      title: {
        display: true,
        text: "Days of the Month",
        color: "#fff", // X-axis title color
        font: {
          family: "Figtree", // Customize the font family
          size: 14, // Customize the font size
          weight: "normal" as const, // You can also adjust font weight
        },
      },
    },
    y: {
      ticks: {
        color: "#bbb", // Y-axis labels color
      },
      grid: {
        color: "#888", // Y-axis grid lines color
      },
      title: {
        display: true,
        text: "Sales Numbers",
        color: "#f9f9f9", // Y-axis title color
        font: {
          family: "Figtree", // Customize the font family
          size: 14, // Customize the font size
          weight: "normal" as const, // You can also adjust font weight
        },
      },
      beginAtZero: true,
      max: 600,
    },
  },
};

const DailySalesTrend: React.FC<{
  days_in_month: number;
  curr_year_label: string;
  curr_year: number[];
  prev_year: number[];
  prev_year_label: string;
}> = ({
  days_in_month,
  curr_year,
  prev_year,
  curr_year_label,
  prev_year_label,
}) => {
  const data = generateData(
    days_in_month,
    curr_year,
    prev_year,
    curr_year_label,
    prev_year_label
  );
  return <Line data={data} options={options} />;
};

export default DailySalesTrend;
