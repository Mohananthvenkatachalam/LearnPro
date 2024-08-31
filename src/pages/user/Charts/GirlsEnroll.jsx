// GirlEnrollmentChart.jsx
import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const GirlEnrollmentChart = () => {
  const data = {
    labels: ['2018-19', '2019-20', '2020-21', '2021-22'],
    datasets: [
      {
        label: 'Pre primary',
        data: [0.5, 0.6, 0.5, 0.4],
        backgroundColor: 'rgba(75, 192, 192, 0.8)',
      },
      {
        label: 'Primary (1-5)',
        data: [5.8, 5.8, 5.8, 5.8],
        backgroundColor: 'rgba(153, 102, 255, 0.8)',
      },
      {
        label: 'Upper Primary (6-8)',
        data: [3.1, 3.1, 3.2, 3.2],
        backgroundColor: 'rgba(255, 159, 64, 0.8)',
      },
      {
        label: 'Secondary (9-10)',
        data: [1.8, 1.8, 1.9, 1.8],
        backgroundColor: 'rgba(255, 99, 132, 0.8)',
      },
      {
        label: 'Higher Secondary (11-12)',
        data: [1.2, 1.3, 1.3, 1.4],
        backgroundColor: 'rgba(54, 162, 235, 0.8)',
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart: Girls Enrollment (in Crore), India (2018-19 to 2021-22)',
      },
    },
    scales: {
      x: {
        stacked: true,
        barPercentage: 0.5, // Reduce bar thickness
        categoryPercentage: 0.5, // Reduce category width
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: 'Enrolment (in crore)',
        },
        beginAtZero: true,
      },
    },
  }

  return <Bar data={data} options={options} height={200} />
}

export default GirlEnrollmentChart
