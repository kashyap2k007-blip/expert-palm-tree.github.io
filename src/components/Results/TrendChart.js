import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function TrendChart({ data, years }) {
  const chartData = {
    labels: years,
    datasets: [
      {
        label: 'Cut-off Rank',
        data: data,
        borderColor: '#155799',
        backgroundColor: 'rgba(21,87,153,0.05)',
        tension: 0.3,
        fill: true,
      }
    ]
  };
  return <Line data={chartData} options={{
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { y: { reverse: true } }
  }} />;
}