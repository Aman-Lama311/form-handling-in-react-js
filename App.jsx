import React, { useState } from 'react'

const App = () => {

  const [username, setUsername] = useState('')
  const submitHandler = (e)=>{
     e.preventDefault()
     console.log(username)
     setUsername('')
  } 

  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <form className='space-y-4 flex flex-col' onSubmit={(e)=>{
        submitHandler(e)
      }}>
       <input 
       value = {username}
       onChange={(e)=>{
        setUsername(e.target.value)
       }} className='p-2 border-2 border-black rounded-sm' type="text" placeholder='Enter your name' />
       <button className='px-6 py-2 text-xl bg-blue-500 rounded-sm font-semibold'>Submit</button>
      </form>
    </div>
  )
}

export default App
