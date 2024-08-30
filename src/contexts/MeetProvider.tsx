import React from 'react'
import AgoraRTC from 'agora-rtc-sdk-ng'
import { AgoraRTCProvider } from 'agora-rtc-react'

type Props = {
  children: React.ReactNode
}

const MeetProvider: React.FC<Props> = ({ children }) => {
  return (
    <AgoraRTCProvider client={AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' })}>
      {children}
    </AgoraRTCProvider>
  )
}

export default MeetProvider
