import React from 'react'

function Numbers() {
  return (
    <div className='px-52 mt-20 sm:px-5'>
        <h1 className='text-2xl text-gray-600 my-5'>Until today we have provided our services to ...</h1>
        <div className="bg-secondary flex space-x-10 sm:space-x-0 p-5 justify-between rounded sm:flex-col sm:space-y-10">
            <div className="flex flex-col space-y-2 text-center">
                <h1 className='text-9xl text-white'>152</h1>
                <h1 className='text-white text-3xl'>Clients</h1>
            </div>
            <div className="flex flex-col space-y-2 text-center">
                <h1 className='text-9xl text-white'>405</h1>
                <h1 className='text-white text-3xl'>Projects</h1>
            </div>
            <div className="flex flex-col space-y-2 text-center">
                <h1 className='text-9xl text-white'>24</h1>
                <h1 className='text-white text-3xl'>Locations</h1>
            </div>
        </div>
    </div>
  )
}

export default Numbers