import { Button } from '@/components/ui/button'
import React from 'react'

function Meet() {
  return (
    <div className='mt-[100px] flex h-full w-full flex-col items-center justify-center'>
      <h1 className='mb-4 text-5xl font-bold'>Join Our Exciting Meeting!</h1>
      <p className='mb-6 text-center text-lg'>
        Don't miss out on our latest updates and discussions. Click the button below to join the
        meeting and be part of the conversation!
      </p>
      <Button
        className='h-14 w-32'
        onClick={() => window.open('http://localhost:5174/lobby.html', '_blank')}
      >
        Join Meeting
      </Button>
      <p className='mt-10 text-center text-sm text-black'>
        We look forward to seeing you there! Your participation is valuable to us.
      </p>
    </div>
  )
}

export default Meet
