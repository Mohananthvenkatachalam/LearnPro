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
import ChartDataLabels from 'chartjs-plugin-datalabels'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels)

const GenderChart = () => {
  const data = {
    labels: ['2018-19', '2019-20', '2020-21', '2021-22'],
    datasets: [
      {
        label: 'Male',
        data: [50.01, 49.25, 48.97, 48.7],
        backgroundColor: '#00bfff',
      },
      {
        label: 'Female',
        data: [49.99, 50.75, 51.03, 51.3],
        backgroundColor: '#ff69b4',
      },
    ],
  }

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Percentage of teachers by gender, all India 2018-19 to 2021-22',
      },
      legend: {
        position: 'right',
      },
      datalabels: {
        display: true,
        color: 'black',
        anchor: 'center',
        align: 'center',
        formatter: (value) => value.toFixed(2) + '%',
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function (value) {
            return value + '%'
          },
        },
      },
    },
  }

  return <Bar data={data} options={options} height={200} />
}

export default GenderChart
