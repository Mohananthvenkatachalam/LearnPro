// RadarChart.js
import React from 'react'
import { Radar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  RadarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(RadarElement, CategoryScale, LinearScale, Title, Tooltip, Legend)

const RadarChart = () => {
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
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Education Categories (2020-21)',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`
          },
        },
      },
    },
    scales: {
      r: {
        angleLines: {
          display: true,
        },
        suggestedMin: 0,
        suggestedMax: Math.max(...data.datasets[0].data) + 100000,
        ticks: {
          callback: function (value) {
            return value
          },
        },
      },
    },
  }

  return <Radar data={data} options={options} />
}

export default RadarChart
