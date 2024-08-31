// EnrollmentChart.js
import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend)

const Enroll = () => {
  const data = {
    title: 'Enrolment of boys (in Crore), India',
    subtitle: '2018-19 to 2021-22',
    xAxis: ['2018-19', '2019-20', '2020-21', '2021-22'],
    yAxisTitle: 'Enrolment (in crore)',
    series: [
      {
        name: 'Pre primary',
        data: [0.6, 0.7, 0.6, 0.5],
      },
      {
        name: 'Primary (1-5)',
        data: [6.3, 6.3, 6.4, 6.4],
      },
      {
        name: 'Upper Primary (6-8)',
        data: [3.3, 3.3, 3.4, 3.5],
      },
      {
        name: 'Secondary (9-10)',
        data: [2.0, 2.0, 2.0, 2.0],
      },
      {
        name: 'Higher Secondary (11-12)',
        data: [1.3, 1.3, 1.4, 1.5],
      },
    ],
  }

  const chartData = {
    labels: data.xAxis,
    datasets: data.series.map((serie) => ({
      label: serie.name,
      data: serie.data,
      borderColor: (() => {
        switch (serie.name) {
          case 'Pre primary':
            return 'rgba(75, 192, 192, 1)'
          case 'Primary (1-5)':
            return 'rgba(153, 102, 255, 1)'
          case 'Upper Primary (6-8)':
            return 'rgba(255, 159, 64, 1)'
          case 'Secondary (9-10)':
            return 'rgba(255, 99, 132, 1)'
          case 'Higher Secondary (11-12)':
            return 'rgba(54, 162, 235, 1)'
          default:
            return 'rgba(0, 0, 0, 1)'
        }
      })(),
      backgroundColor: (() => {
        switch (serie.name) {
          case 'Pre primary':
            return 'rgba(75, 192, 192, 0.2)'
          case 'Primary (1-5)':
            return 'rgba(153, 102, 255, 0.2)'
          case 'Upper Primary (6-8)':
            return 'rgba(255, 159, 64, 0.2)'
          case 'Secondary (9-10)':
            return 'rgba(255, 99, 132, 0.2)'
          case 'Higher Secondary (11-12)':
            return 'rgba(54, 162, 235, 0.2)'
          default:
            return 'rgba(0, 0, 0, 0.2)'
        }
      })(),
      fill: false,
    })),
  }

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: data.title,
      },
      subtitle: {
        display: true,
        text: data.subtitle,
      },
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw.toFixed(2)} crore`
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Year',
        },
      },
      y: {
        title: {
          display: true,
          text: data.yAxisTitle,
        },
        ticks: {
          callback: function (value) {
            return `${value.toFixed(2)} crore`
          },
        },
      },
    },
  }

  return <Line data={chartData} options={options} />
}

export default Enroll
