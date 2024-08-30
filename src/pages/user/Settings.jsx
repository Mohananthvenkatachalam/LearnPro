import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardFooter,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useState } from 'react'
import { Edit3, Save, Key, Mail, Phone, UserCircle, MapPin, Calendar } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'

export default function Settings() {
  const [edit, setEdit] = useState(false)
  const { user } = useAuth()

  return (
    <div className='grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:px-6'>
      {/* Profile Card */}
      <div className='col-span-1'>
        <Card className='flex h-[500px] flex-col items-center justify-center bg-gray-100 shadow-md'>
          <header className='space-y-4 p-4 text-center'>
            <div className='space-x-4'>
              <img
                src='https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg'
                alt='Avatar'
                width='96'
                height='96'
                className='mx-auto rounded-full border border-gray-300 shadow-md'
                style={{ aspectRatio: '96/96', objectFit: 'cover' }}
              />
              <div className='space-y-1.5'>
                <h1 className='text-2xl font-bold'>{user.fullname}</h1>
                <p className='text-gray-600'>
                  {user.role === 'user' ? 'Student' : user.fullname + ' Admin'}
                </p>
              </div>
            </div>
          </header>
        </Card>
      </div>
      <div>
        <Card className='shadow-md'>
          <div className='p-6 space-y-6'>
            <h2 className='text-lg font-semibold text-gray-700'>Personal Information</h2>
            <div className='space-y-4'>
              <div className='flex items-center gap-3'>
                <UserCircle className='text-gray-500' />
                <Label htmlFor='name'>Name:</Label>
                <Input
                  id='name'
                  {...(edit ? { disabled: false } : { disabled: true })}
                  placeholder={user.fullname}
                  defaultValue={user.fullname}
                  className='border-gray-300'
                />
              </div>
              <div className='flex items-center gap-3'>
                <Mail className='text-gray-500' />
                <Label htmlFor='email'>Email:</Label>
                <Input
                  id='email'
                  {...(edit ? { disabled: false } : { disabled: true })}
                  placeholder={user.email}
                  className='border-gray-300'
                />
              </div>
              <div className='flex items-center gap-3'>
                <Phone className='text-gray-500' />
                <Label htmlFor='phone'>Phone:</Label>
                <Input
                  id='phone'
                  {...(edit ? { disabled: false } : { disabled: true })}
                  placeholder='Enter your phone'
                  className='border-gray-300'
                />
              </div>
              <div className='flex items-center gap-3 ml-3'>
                <Label htmlFor='age'>Age:</Label>
                <Input
                  type='number'
                  id='age'
                  min='10'
                  max='18'
                  disabled={!edit}
                  defaultValue={user.age}
                  className='border-gray-300'
                  placeholder={user.age}
                />
                <Label htmlFor='class'>Class:</Label>
                <select
                  id='class'
                  disabled={!edit}
                  defaultValue={user.class}
                  className='border-gray-300 rounded-lg px-2'
                >
                  <option value='10'>10</option>
                  <option value='11'>11</option>
                  <option value='12'>12</option>
                </select>
              </div>
            </div>

            <div className='pt-6'>
              <h2 className='text-lg font-semibold text-gray-700'>Change Password</h2>
              <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                <div className='flex items-center gap-3'>
                  <Key className='text-gray-500' />
                  <Label htmlFor='current-password'>Current Password</Label>
                  <Input
                    id='current-password'
                    {...(edit ? { disabled: false } : { disabled: true })}
                    placeholder='************'
                    type='password'
                    className='border-gray-300'
                  />
                </div>
                <div className='flex items-center gap-3'>
                  <Key className='text-gray-500' />
                  <Label htmlFor='new-password'>New Password</Label>
                  <Input
                    id='new-password'
                    placeholder='Enter your new password'
                    {...(edit ? { disabled: false } : { disabled: true })}
                    type='password'
                    className='border-gray-300'
                  />
                </div>
                <div className='flex items-center gap-3'>
                  <Key className='text-gray-500' />
                  <Label htmlFor='confirm-password'>Confirm Password</Label>
                  <Input
                    id='confirm-password'
                    {...(edit ? { disabled: false } : { disabled: true })}
                    placeholder='Confirm your new password'
                    type='password'
                    className='border-gray-300'
                  />
                </div>
              </div>
            </div>

            <div className='flex justify-between items-center mt-8'>
              <Button
                size='lg'
                onClick={() => setEdit(false)}
                className='bg-blue-500 text-white hover:bg-blue-600 transition-all ease-in-out'
              >
                <Save className='mr-2' /> Save
              </Button>
              <Button
                size='lg'
                onClick={() => setEdit(true)}
                className='bg-green-500 text-white hover:bg-green-600 transition-all ease-in-out'
              >
                <Edit3 className='mr-2' /> Edit
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
