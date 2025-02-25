'use client';

import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

// Props: labels (array of strings), data (array of numbers)
export default function RadarChart({ labels, data }) {
  const chartData = {
    labels: labels, // Dynamic labels from props
    datasets: [
      {
        label: 'Sentiment',
        data: data, // Dynamic data from props
        backgroundColor: 'rgba(0, 123, 255, 0.2)', // Light blue fill
        borderColor: '#007bff', // Matches your link color
        borderWidth: 2,
        pointBackgroundColor: '#007bff',
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: { display: true },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: { stepSize: 20, font: { size: 10 } }, // Smaller font
      },
    },
    plugins: {
      legend: { labels: { font: { size: 12 } } }, // Smaller legend font
    },
  };

  return <Radar data={chartData} options={options} />;
}