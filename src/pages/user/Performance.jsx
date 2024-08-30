import React from 'react'
import { faker } from '@faker-js/faker'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const Status = [
  {
    course: 'Fundamentals-Of-optics',
    owner: 'mohanV@gmail.com',
  },
  {
    course: 'Organic-Chemistry',
    owner: 'mohanV@gmail.com',
    percentage: '50',
  },
  {
    course: 'parts-of-speech',
    owner: 'susanB@gmail.com',
    percentage: '60',
  },
  {
    course: 'Computer-Science',
    owner: 'davidK@gmail.com',
    percentage: '75',
  },
  {
    course: 'Fiber-Optics',
    owner: 'janeD@gmail.com',
    percentage: '25',
  },
  {
    course: 'Python',
    owner: 'alexT@gmail.com',
    percentage: '95',
  },
]

const TopScorers = [
  {
    rank: 1,
    course: 'Fiber-optics',
    owner: 'Layaranjith M',
    points: '195',
  },
  {
    rank: 2,
    course: 'Fiber-optics',
    owner: 'Kavin S',
    points: '190',
  },
  {
    rank: 3,
    course: 'Fiber-optics',
    owner: 'Praveen T',
    points: '187',
  },
  {
    rank: 4,
    course: 'Fiber-optics',
    owner: 'Abshiek S',
    points: '183',
  },
  {
    rank: 5,
    course: 'Fiber-optics',
    owner: 'Priyanshu T',
    points: '178',
  },
  {
    rank: 6,
    course: 'Fiber-optics',
    owner: 'Mohan V',
    points: '172',
  },
  {
    rank: 7,
    course: 'Fiber-optics',
    owner: 'Aswanth S',
    points: '163',
  },
  {
    rank: 8,
    course: 'Fiber-optics',
    owner: 'Nethish M',
    points: '159',
  },
  {
    rank: 9,
    course: 'Fiber-optics',
    owner: 'Rufus T',
    points: '154',
  },
  {
    rank: 10,
    course: 'Fiber-optics',
    owner: 'Naveen Kumar M',
    points: '154',
  },
].map((e) => ({
  ...e,
  profile_img: faker.image.avatar(),
}))

function Performance() {
  return (
    <div>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
        <div>
          <Card x-chunk='dashboard-01-chunk-5'>
            <p className='px-5 pt-5 text-2xl font-bold'>PERFORMANCE LEADERBOARD</p>
            <CardHeader>
              <div className='flex items-center justify-between gap-4'>
                <CardTitle>Module Test Attended</CardTitle>
                <CardTitle> View Leaderboard</CardTitle>
              </div>
            </CardHeader>
            <CardContent className='col-span-2 grid gap-8'>
              {Status.map((e, index) => (
                <div className='flex items-center gap-4' key={index}>
                  <Avatar className='hidden h-9 w-9 sm:flex'>
                    <AvatarImage src='/avatars/02.png' alt='Avatar' />
                    <AvatarFallback>{e.course.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className='grid gap-1'>
                    <p className='text-sm font-medium leading-none'>{e.course}</p>
                    <p className='text-sm text-muted-foreground'>{e.owner}</p>
                  </div>
                  <div className='ml-auto font-medium'>
                    <Button>View</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <p className='px-5 pt-5 text-center text-2xl font-bold'>FIBER OPTICS</p>
            <div className='p-5'>
              <CardHeader>
                <div className='flex items-center gap-4'>
                  <CardTitle>Rank</CardTitle>
                  <CardTitle>Name</CardTitle>
                  <CardTitle className='ml-auto'>Points</CardTitle>
                </div>
              </CardHeader>
              <CardContent className='col-span-2 grid gap-8'>
                {TopScorers.map((e, index) => (
                  <div className='flex items-center gap-4' key={index}>
                    <div>
                      <Avatar className='size-6'>
                        <AvatarImage src={e.profile_img} alt='Avatar' />
                        <AvatarFallback>{e.rank}</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className='text-cent grid gap-10'>
                      <p className='text-sm text-muted-foreground'>{e.owner}</p>
                    </div>
                    <div className='ml-auto font-medium'>{e.points}</div>
                  </div>
                ))}
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Performance
