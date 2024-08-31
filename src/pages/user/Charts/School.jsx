// GenderPercentageChart.js
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

const GenderPercentageChart = () => {
  const data = {
    title: 'Percentage of teachers by gender, all India',
    subtitle: '2018-19 to 2021-22',
    xAxis: ['2018-19', '2019-20', '2020-21', '2021-22'],
    yAxisTitle: 'Percentage',
    series: [
      {
        name: 'Male',
        data: [50.01, 49.25, 48.97, 48.7],
      },
      {
        name: 'Female',
        data: [49.99, 50.75, 51.03, 51.3],
      },
    ],
  }

  const chartData = {
    labels: data.xAxis,
    datasets: data.series.map((serie) => ({
      label: serie.name,
      data: serie.data,
      borderColor: serie.name === 'Male' ? 'rgba(54, 162, 235, 1)' : 'rgba(255, 99, 132, 1)',
      backgroundColor:
        serie.name === 'Male' ? 'rgba(54, 162, 235, 0.2)' : 'rgba(255, 99, 132, 0.2)',
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
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw.toFixed(2)}%`
          },
        },
        datalabels: {
          display: false, // Ensure no data labels are displayed
        },
        tooltip: {
          enabled: false, // Disable tooltips completely
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
            return `${value.toFixed(2)}%`
          },
        },
      },
    },
  }

  return <Line data={chartData} options={options} />
}

export default GenderPercentageChart
