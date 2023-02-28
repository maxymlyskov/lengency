import React from 'react'

function Intro() {
  return (
    <div className='mb-20'>

    <div className='about-intro h-screen'>
    </div>
    <div className='flex flex-row justify-center mt-24'>

        <img className='h-[500px] w-[500px] ' src="https://sheygency.netlify.app/static/media/about-intro.dc99b53cb7b13dc86ebd8c92362f897c.svg" alt="" />
        <div className='mt-24 ml-8'>
            <h1 className="text-8xl font-semibold text-white border-b border-b-white">SHEYTAILWIND</h1>
            <div className="flex flex-row gap-3">

            <p className="text-md mt-5 text-gray-200">OLDER</p>
            <p className="text-md mt-5 text-gray-200 border-x px-2 border-gray-200 border-">STRONGER</p>
            <p className="text-md mt-5 text-gray-200">WISER</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Intro