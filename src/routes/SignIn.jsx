import React from 'react'
import { AiFillLock, AiOutlineMail } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className='flex justify-center'>
      <div className='max-w-[400px] min-h-[600px] px-4 py-20'>
        <h1 className='text-2xl font-bold'>Sign in</h1>
        <form>
          <div className='my-4'>
            <label>Email</label>
            <div className='relative my-2 rounded-2xl shadow-xl'>
              <input className='w-full p-2 bg-primary border border-input rounded-2xl' type="email" />
              <AiOutlineMail className='absolute right-2 top-3' />
            </div>
          </div>
          <div className='my-4'>
            <label>Password</label>
            <div className='relative my-2 rounded-2xl shadow-xl'>
              <input className='w-full p-2 bg-primary border border-input rounded-2xl' type="password" />
              <AiFillLock className='absolute right-2 top-3' />
            </div>
          </div>
          <button className='w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl'>Sign in</button>
        </form>
        <p className='py-4'>Don't have an account? <Link to='/signup' className='text-accent'>Sign up</Link></p>
      </div>
    </div>
  )
}

export default SignIn