import { levels } from '@/constants/moduleData'
import React from 'react'
import { Link } from 'react-router-dom'

const EducationCard = () => {
  return (
    <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {levels.map((level, key) => (
        <div
          key={key}
          className='max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800'
        >
          <img className='w-full rounded-t-lg' src={level.image} alt={level.level} />
          <div className='p-5'>
            <h5 className='mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              {level.level}
            </h5>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{level.description}</p>
            <div className='flex justify-center'>
              <Link
                to={level.link}
                className='inline-flex items-center rounded-lg bg-black px-3 py-2 text-center text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-4 focus:ring-black dark:bg-black dark:hover:bg-black dark:focus:ring-black'
              >
                LEARN
                <svg
                  className='ms-2 h-3.5 w-3.5 rtl:rotate-180'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 14 10'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M1 5h12m0 0L9 1m4 4L9 9'
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default EducationCard
