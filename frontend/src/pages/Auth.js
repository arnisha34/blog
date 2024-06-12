import React from 'react'

export const Auth = () => {
  return (
    <section className='flex justify-center items-center w-3/4 min-h-screen'>
      <article id='login flex'>
        <div className='left-side'>
          <h2>Welcome Back!</h2>
          <p>Not quite blogging yet? Register now</p>
          <button>Sign up</button>
        </div>
        <div className='right-side'>
        </div>
      </article>
      <article id='register flex'>
        <div className='left-side'>
          <h2>Hey There!</h2>
          <p>Already have an account? Login now</p>
          <button>Sign in</button>
        </div>
        <div className='right-side'>
        </div>
      </article>
    </section>
  )
}