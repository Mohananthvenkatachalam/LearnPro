// Frontend Code: ChatBot Component
import { Input } from '@/components/ui/input'
import { DropdownMenuSub } from '@radix-ui/react-dropdown-menu'
import { DropdownMenuIcon } from '@radix-ui/react-icons'
import axios from 'axios'
import { ArrowDown, ArrowDownCircleIcon, SendHorizonal } from 'lucide-react'
import React, { useState } from 'react'

const ChatBot = () => {
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const handleSendMessage = async () => {
    if (inputValue !== '') {
      // Add user message to the chat
      setMessages((prev) => [...prev, { text: inputValue, isUser: true }])

      try {
        const response = await axios.post('http://localhost:3000/api/chatbot/getChat', {
          text: inputValue,
        })
        console.log(response)
        // Extracting the message content from the response data
        const botMessage = response.data || 'No response received.'
        setMessages((prev) => [...prev, { text: botMessage, isUser: false }])
      } catch (error) {
        console.error('Error fetching bot response:', error)
        setMessages((prev) => [
          ...prev,
          { text: 'Sorry, something went wrong. Please try again.', isUser: false },
        ])
      }

      setInputValue('')
    }
  }

  const toggleChatBot = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='fixed bottom-4 right-4 z-50'>
      {/* Small Icon/Button to Open the ChatBot */}
      {!isOpen && (
        <div onClick={toggleChatBot} className='cursor-pointer'>
          <img src='/images/chatbot.png' alt='ChatBot Icon' className='h-16 w-20 rounded-full' />
        </div>
      )}

      {/* Expanded ChatBot */}
      {isOpen && (
        <div
          className='flex flex-col items-center'
          style={{
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
            borderRadius: '10px',
            padding: '10px',
            width: '300px',
            height: '400px',
            backgroundColor: '#fff',
          }}
        >
          <div className='flex h-12 w-full items-center justify-between rounded-t-lg bg-black p-2'>
            <h2 className='text-lg font-bold text-white'>LearnBot</h2>
            <button onClick={toggleChatBot} className='text-white'>
              <ArrowDownCircleIcon />
            </button>
          </div>
          <div className='h-64 w-full overflow-y-auto p-4'>
            {messages.map((message, index) => (
              <p
                key={index}
                className={`text-sm ${
                  message.isUser ? 'ml-9 text-right text-black' : 'text-left text-black'
                } break-words rounded p-2`}
              >
                {message.text}
              </p>
            ))}
          </div>
          <div className='flex h-12 w-full items-center justify-between p-2'>
            <Input
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSendMessage()
              }}
              type='text'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder='Type your message...'
              className='w-full p-2 text-sm text-gray-700'
            />
            <button className='ml-2' onClick={handleSendMessage}>
              <SendHorizonal />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChatBot
