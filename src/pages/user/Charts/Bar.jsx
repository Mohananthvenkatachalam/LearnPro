// BarChart.js
import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend)

const BarChart = () => {
  const data = {
    labels: [
      'Kendriya Vidyalayas',
      'Jawahar Navodaya Vidyalayas',
      'Other Central Government',
      'State Government',
      'Total Government Schools',
      'Total Government Aided Schools',
      'Total Private Unaided Recognized Schools',
      'Total Recognized Madarsa',
    ],
    datasets: [
      {
        label: '2020-21',
        data: [38851, 11453, 6889, 4869906, 4927099, 808355, 3647674, 313297],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: '2021-22',
        data: [39596, 12270, 6342, 4824238, 4882446, 796631, 3540647, 287399],
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Comparison of Education Categories (2020-21 vs 2021-22)',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`
          },
        },
      },
      datalabels: {
        display: false, // Ensure no data labels are displayed
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Categories',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Count',
        },
      },
    },
  }

  return <Bar data={data} options={options} height={250} />
}

export default BarChart
