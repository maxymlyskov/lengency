import React from 'react'

function Intro() {
  return (
    <div className='min-h-screen bg-primary grid grid-cols-2 items-center sm:grid-cols-1 sm:p-10 sm:-mt-16'>
        <div className="h-[500px]">
        <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_jimqos21.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>        </div>
        <div className="">
            <h1 className='text-8xl font-semibold text-white sm:text-5xl sm:-mt-15'>We <b className='text-secondary'>work</b> together with put <b className='text-green-500'>clients</b></h1>
        </div>
    </div>
  )
}

export default Intro