import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DaysPerProgramGraph = (props) => {
  const { dataArr } = props;
    const daysInEachProgram = Object.values(dataArr.daysInEachProgram);
    const labels = Object.keys(dataArr.daysInEachProgram);
    const data = Object.values(dataArr.daysInEachProgram);
  
    console.log(daysInEachProgram)
    console.log(labels)
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Days Per Program',
        data,
        backgroundColor: 'rgb(255, 99, 132)',
        stack: 'Stack 0',
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Bar Chart - Stacked',
      },
    },
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    };
    
  return <Bar options={options} data={chartData} />;
};

export default DaysPerProgramGraph;
