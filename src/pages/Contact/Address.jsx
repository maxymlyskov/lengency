import React from 'react'

function Address() {
  return (
    <div className='flex justify-center'>
        <div className="bg-primary rounded-3xl flex-col space-y-10 p-10 text-white">
            <h1 className='text-3xl font-semibold'>Get In Touch</h1>
            <p>Sheygency is digital marketing agency, we provide marketing and development services</p>

            <div className="flex space-x-5">
                <div className="h-12 w-12 bg-[#ff73001a] p-2 rounded flex items-center">
                    <i className="ri-map-pin-line text-3xl text-secondary"></i>
                </div>
                <div className="">
                <h1 className='font-semibold text-xl'>Visit Us</h1>
                    <p>Kyiv, Ukraine</p>
                </div>
            </div>
            <div className="flex space-x-5">
                <div className="h-12 w-12 bg-[#ff73001a] p-2 rounded flex items-center">
                    <i className="ri-mail-line text-3xl text-secondary"></i>
                </div>
                <div className="">
                    <h1 className='font-semibold text-xl'>Mail Us</h1>
                    <p>lyskovmaxym@gmail.com</p>
                </div>
            </div>
            <div className="flex space-x-5">
                <div className="h-12 w-12 bg-[#ff73001a] p-2 rounded flex items-center">
                    <i className="ri-phone-line text-3xl text-secondary"></i>
                </div>
                <div className="">
                    <h1 className='font-semibold text-xl'>Call Us</h1>
                    <p>+380667261172</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Address