import React from 'react'

const ChatMessage = ({ name, message }) => {
  return (
    <div className='flex items-center shadow-md rounded-md p-2'>
        <img src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
        className='h-8'></img>

        <span className='text-sm font-semibold px-1'>{name}</span>
        <span className='text-sm'>{message}</span>
    </div>
  )
}

export default ChatMessage