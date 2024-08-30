import { CircularSpinner } from '@/components/ui/spinner'
import { useAuth } from '@/contexts/AuthContext'
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const CommonLayout: React.FC = () => {
  const { isAuthenticated } = useAuth()
  const pathname = window.location.pathname
  const navigate = useNavigate()

  React.useEffect(() => {
    if (!isAuthenticated) {
      return navigate('/auth/login?redirect=' + pathname, { replace: true })
    }
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className='relative flex h-full min-h-screen flex-col bg-gray-50 dark:bg-neutral-950'>
      <div className='relative flex-1'>
        <React.Suspense
          fallback={
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
              <CircularSpinner size='xl' />
            </div>
          }
        >
          <Outlet /> {/* This is where the child routes will be rendered */}
        </React.Suspense>
      </div>
    </div>
  )
}

export default CommonLayout
