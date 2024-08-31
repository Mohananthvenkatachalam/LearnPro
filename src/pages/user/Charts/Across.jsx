// PieChart.js
import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, CategoryScale, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, CategoryScale, Title, Tooltip, Legend)

const PieChart = () => {
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
        data: [38851, 11453, 6889, 4869906, 4927099, 808355, 3647674, 313297],
        backgroundColor: [
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Distribution of Education Categories (2020-21)',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`
          },
        },
      },
    },
  }

  return <Pie data={data} options={options} />
}

export default PieChart
