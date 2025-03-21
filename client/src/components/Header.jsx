import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-teal-600 text-white p-4 shadow-md '>
      <div className='flex justify-between items-center max-w-6xl'>
        <Link to='/'> <h1 className='font-bold'>
          Skill Share
        </h1></Link>
        
        <ul className='flex gap-4'>
          <Link to='/'><li>Home</li> </Link>
          <Link to='/about'><li>About</li></Link>
          <Link to='/sign-in'><li>Sign In</li></Link>
        </ul>
      </div>
    </div>
  )
}
