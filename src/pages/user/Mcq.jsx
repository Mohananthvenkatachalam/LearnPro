import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { PlusIcon } from 'lucide-react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Mcq() {
  const [search, setSearch] = useState('')
  const [selectedQuizId, setSelectedQuizId] = useState(null)
  const [quizDetails, setQuizDetails] = useState([])
  const [isBackgroundBlurred, setIsBackgroundBlurred] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/gateway/get-all-quiz')
        setQuizDetails(response.data)
        console.log(selectedQuizId)
      } catch (error) {
        console.log(error)
      }
    }
    fetchQuestions()
  }, [])

  const handleStartTest = () => {
    setIsBackgroundBlurred(true)

    // Set timeout to navigate after 4 seconds (for the blur effect duration)
    setTimeout(() => {
      navigate(`/take-test?quizId=${selectedQuizId}`)
    }, 4000)
  }

  return (
    <div>
      <div
        className={`px-[30px] py-[40px] transition-all duration-300 ${isBackgroundBlurred ? 'blur-md' : ''}`}
      >
        <p className='mb-2 text-[20px] font-semibold'>MCQ Test</p>
        <p>The MCQ test for your students to test their skills</p>

        {!selectedQuizId ? (
          <div>
            <div className='mt-5'>
              <div className='mb-3 flex items-center justify-between gap-2'>
                <Input
                  type='text'
                  placeholder='Search Test...'
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className='w-[300px]'
                />
                <div className='flex gap-4'>
                  <Button>
                    <PlusIcon className='mr-1 size-4' />
                    View Results
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <h1 className='mb-[20px] text-[20px] font-semibold'>List of Tests :-</h1>
              <div className='overflow-x-auto'>
                <table className='min-w-full table-auto divide-y divide-gray-200 border-gray-300'>
                  <thead className='bg-gray-50'>
                    <tr>
                      <th className='px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500'>
                        Test ID
                      </th>
                      <th className='px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500'>
                        Title
                      </th>
                      <th className='px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500'>
                        Admin ID
                      </th>
                      <th className='px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500'>
                        Total Attended
                      </th>
                      <th className='px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500'>
                        Take Test
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200 bg-white'>
                    {quizDetails.map((item) => (
                      <tr key={item.id}>
                        <td className='max-w-xs whitespace-nowrap px-4 py-6'>{item.id}</td>
                        <td className='max-w-xs whitespace-nowrap px-4 py-6'>{item.title}</td>
                        <td className='max-w-xs whitespace-nowrap px-4 py-6'>{item.admin_id}</td>
                        <td className='max-w-xs whitespace-nowrap px-4 py-6'>
                          {item.total_attended_count}
                        </td>
                        <td className='max-w-xs whitespace-nowrap px-4'>
                          <Button
                            className='px-4 text-[12px]'
                            onClick={() => setSelectedQuizId(item.id)}
                          >
                            Take Test
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className='flex min-h-[50vh] flex-col items-center justify-center'>
            <img
              src='https://img.icons8.com/?size=100&id=49IJ6AikRhX9&format=png&color=000000'
              alt='Start Icon'
              className='mb-4 h-[50px] w-[50px]'
            />
            <h2 className='mb-4 text-[24px] font-semibold'>Start the Test</h2>
            <Button onClick={handleStartTest} className='px-6 py-3 text-[16px] font-bold'>
              Start Test
            </Button>
          </div>
        )}
      </div>

      {/* This div is used to keep elements like button and text outside of blur effect */}
      {isBackgroundBlurred && (
        <div className='fixed inset-0 flex items-center justify-center bg-transparent'>
          <h1 className='text-3xl font-bold text-black'>Starting Test...</h1>
        </div>
      )}
    </div>
  )
}

export default Mcq
