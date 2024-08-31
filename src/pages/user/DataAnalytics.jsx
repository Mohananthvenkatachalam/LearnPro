import React from 'react'
import { Bar, Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Card } from '@/components/ui/card'
import GenderPercentageChart from './Charts/School'
import Enroll from './Charts/Enroll'
import GirlsEnrollmentChart from './Charts/GirlsEnroll'
import GenderPercentageBarChart from './Charts/Gender'
import PieChart from './Charts/Across'
import BarChart from './Charts/Bar'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
)

const EnrollmentChart = () => {
  const data = {
    labels: ['2018-19', '2019-20', '2020-21', '2021-22'],
    datasets: [
      {
        label: 'Pre Primary',
        data: [1.2, 1.4, 1.06, 0.95],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'Primary (1-5)',
        data: [12.0, 12.2, 12.2, 12.18],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
      },
      {
        label: 'Upper Primary (6-8)',
        data: [6.4, 6.5, 6.6, 6.68],
        borderColor: 'rgba(255, 206, 86, 1)',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
      },
      {
        label: 'Secondary (9-10)',
        data: [3.8, 3.8, 3.9, 3.85],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
      {
        label: 'Higher Secondary (11-12)',
        data: [2.6, 2.6, 2.7, 2.86],
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
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
        text: 'Enrollment Over the Years',
      },
    },
  }

  return (
    <div className='mx-auto w-auto p-4'>
      <Line data={data} options={options} />
    </div>
  )
}

const FacilityChart = () => {
  const data = {
    labels: [
      'Electricity connection',
      'Drinking water facility',
      'Toilet facility',
      "Boys' toilet facility",
      "Girls' toilet facility",
      'Hand wash facilities',
      'Playground facility',
      'Computer facility',
      'Internet facility',
      'CWSN friendly toilets',
      'Ramps with handrail facility for CWSN students',
      'Kitchen Gardens',
      'Rain Water Harvesting System',
      'Libraries/Reading Corner/Book Bank facilities',
    ],
    datasets: [
      {
        label: '2019-20',
        data: [
          86.9, 97.45, 98.49, 96.2, 97.32, 91.99, 75.76, 41.25, 24.51, 25.25, 48.31, 26.05, 20.34,
          85.58,
        ],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: '2020-21',
        data: [
          89.34, 98.22, 98.71, 96.22, 97.48, 93.64, 76.96, 44.85, 33.91, 26.96, 49.72, 27.65, 21.02,
          87.3,
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
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
        text: 'School Facilities Over the Years (2019-20 vs 2020-21)',
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  }

  return (
    <div className='h-full w-full px-[250px] py-4' style={{ height: '500px' }}>
      <Bar data={data} options={options} />
    </div>
  )
}

const FacilityCharts = () => {
  const data = {
    labels: [
      'Drinking water within school premises',
      "Girls' toilet",
      "Boys' toilet",
      'Handwash',
      'Electricity',
      'Library/Reading room/Reading corner',
      'Playground',
      'Ramp',
      'Ramp with handrail',
      'Computer',
      'Internet',
      'Kitchen Garden',
      'CWSN toilet',
      'Rain water Harvesting',
    ],
    datasets: [
      {
        label: '2018-19',
        data: [95.8, 95.9, 95.6, 93.6, 89.3, 76.7, 80.6, 63.7, 47.5, 41.3, 33.9, 20.9, 21.0, 17.9],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: '2019-20',
        data: [97.2, 96.7, 96.2, 94.6, 90.8, 81.9, 81.6, 69.5, 49.1, 43.5, 34.5, 24.5, 23.3, 20.4],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: '2020-21',
        data: [98.2, 97.5, 96.9, 95.2, 88.2, 87.3, 77.0, 71.8, 49.7, 47.5, 35.2, 27.7, 27.0, 21.0],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: '2021-22',
        data: [98.2, 97.5, 96.2, 95.1, 88.2, 87.3, 77.0, 71.8, 49.7, 47.5, 35.2, 27.7, 27.0, 21.0],
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
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
        text: 'School Facilities Over the Years',
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  }

  return (
    <div className='mx-auto w-full max-w-6xl p-4'>
      <Bar data={data} options={options} />
    </div>
  )
}
function DataAnalytics() {
  return (
    <div>
      <h1 className='mb-5 text-center text-3xl font-bold'>Data Analytics For Schools</h1>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-4'>
        <div className='col-span-4'>
          <Card>
            <EnrollmentChart />
          </Card>
        </div>
        <div className='col-span-4'>
          <Card>
            <FacilityChart />
          </Card>
        </div>
        <div className='col-span-2'>
          <Card>
            <PieChart />
          </Card>
        </div>
        <div className='col-span-2'>
          <Card>
            <GenderPercentageChart />
          </Card>
        </div>
        <div className='col-span-2'>
          <Card>
            <FacilityCharts />
          </Card>
        </div>
        <div className='col-span-3'>
          <Card>
            <Enroll />
          </Card>
        </div>
        <div className='col-span-3'>
          <Card>
            <GirlsEnrollmentChart />
          </Card>
        </div>
        <div className='col-span-3'>
          <Card>
            <GenderPercentageBarChart />
          </Card>
        </div>
        <div className='col-span-3'>
          <Card>
            <PieChart />
          </Card>
        </div>
        <div className='col-span-3'>
          <Card>
            <BarChart />
          </Card>
        </div>
      </div>
    </div>
  )
}

export default DataAnalytics
