import React from 'react'

function Intro() {
  return (
    <div className='mb-20'>

    <div className='about-intro h-screen sm:rotate-0 sm:hidden'>
    </div>
    <div className='flex flex-row justify-center mt-24 sm:flex-col sm:bg-secondary sm:mt-0 sm:py-16 sm:rounded-b-xl'>

        <img className='h-[500px] w-[500px] sm:p-10 ' src="https://sheygency.netlify.app/static/media/about-intro.dc99b53cb7b13dc86ebd8c92362f897c.svg" alt="" />
        <div className='mt-24 ml-8 sm:ml-0 sm:px-5 sm:-mt-16 '>
            <h1 className="text-8xl font-semibold text-white border-b border-b-white sm:text-6xl sm:max-w-max sm:items-center xl:text-5xl">LENGENCY</h1>
            <div className="flex flex-row gap-3">
              <p className="text-md mt-5 text-gray-200 font-semibold sm:text-center sm:text-xl">OLDER | WISER | STRONGER</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Intro