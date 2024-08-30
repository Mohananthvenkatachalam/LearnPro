import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import React, { useState } from 'react'

const Module = () => {
  const [selectedDay, setSelectedDay] = useState(null)
  const [frameSrc, setFrameSrc] = useState('https://www.youtube.com/embed/p51FiPO2_kQ')

  const handleLearn = (link) => {
    const videoId = link.includes('youtu.be')
      ? link.split('youtu.be/')[1].split('?')[0]
      : link.split('v=')[1].split('&')[0]
    setFrameSrc(`https://www.youtube.com/embed/${videoId}`)
  }

  const toggleDay = (id) => {
    setSelectedDay(selectedDay === id ? null : id)
  }

  const days = [
    {
      id: 1,
      title: 'Lesson 1 : Living and Non-Living things',
      link: 'https://youtu.be/p51FiPO2_kQ?si=EsaNwRR3Gwo3K-Y5',
    },
    {
      id: 2,
      title: 'Lesson 2 : Parts of a plant',
      link: 'https://youtu.be/X6TLFZUC9gI?si=Rm4V3-zWLSHy-FvE',
    },
    {
      id: 3,
      title: 'Lesson 3 : States of a matter',
      link: 'https://youtu.be/jmm1J2yI9tk?si=6baQCT3yLFrlhTS1',
    },
    {
      id: 4,
      title: 'Lesson 4 : Light',
      link: 'https://youtu.be/fvKpqIS9k9Y?si=yqh_ixqmAkzgOMOJ',
    },
    {
      id: 5,
      title: 'Lesson 5 : Parts of the body',
      link: 'https://youtu.be/8nGRgw1Bwyo?si=ye8mbQltX67KmMM5',
    },
    {
      id: 6,
      title: 'Lesson 6 : Magnetism',
      link: 'https://youtu.be/DR9w4koW2EA?si=AJd_Sp5Y7Exexjyf',
    },
  ]

  return (
    <div className='container mx-auto h-screen p-5'>
      <div className='mb-5'>
        <h1 className='text-3xl font-bold'>Welcome to the Interactive Learning Module!</h1>
        <p className='mt-2 text-lg'>
          Dive into our engaging lessons and interactive tests. Click on a lesson to start learning
          and watch the video in full screen. Let's make learning fun and exciting!
        </p>
      </div>
      <div className='grid h-[calc(100vh-100px)] grid-cols-5 gap-4'>
        {/* This sets the height of the grid to occupy the full viewport minus the header */}
        <div className='col-span-2 h-full overflow-y-auto'>
          {/* This ensures the column can scroll if content overflows */}
          <h2 className='text-2xl font-bold'>Contents</h2>
          {days.map((day) => (
            <Card key={day.id} className='my-3 mr-10'>
              <Button
                variant={'ghost'}
                className={`my-4 cursor-pointer text-lg hover:text-blue-500 ${selectedDay === day.id && 'text-blue-500'}`}
                onClick={() => toggleDay(day.id)}
              >
                {day.title}
              </Button>
              {selectedDay === day.id && (
                <div className='ml-4 flex gap-4'>
                  <Button
                    variant={'outline'}
                    onClick={() => handleLearn(day.link)}
                    className='my-4 py-0'
                  >
                    Lesson
                  </Button>
                  <Button variant={'outline'} className='my-4 py-0'>
                    Test
                  </Button>
                </div>
              )}
            </Card>
          ))}
        </div>
        <div className='col-span-3'>
          {/* Setting a fixed height ensures the iframe does not change height */}
          <iframe
            className='h-4/5 w-full'
            src={frameSrc}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Module
