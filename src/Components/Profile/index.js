import React from 'react'

export default function Profile({username,handleLogout}) {
  return (
    <div className='absolute size-44 bg-green-300 top-16 right-2 text-center'>
        <h1>Profile</h1>
        <p>Welcome {username}!</p>
        <button className='bg-white px-3 py-1 rounded-md' onClick={handleLogout}>Logout</button>
    </div>
  )
}
