import React from 'react'

const MeetPage: React.FC = () => {
  const [path, setPath] = React.useState('lobby.html')

  return (
    <iframe
      // log when the url changes in iframe
      onLoad={(e) => {
        console.log((e.target as HTMLIFrameElement).contentWindow?.location.href)
      }}
      src={`http://localhost:5174/${path}`}
      className='h-screen w-full'
    />
  )
}

export default MeetPage
