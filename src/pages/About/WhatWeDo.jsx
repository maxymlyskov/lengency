import React from 'react'

function WhatWeDo() {
    const items= [
        {
            title:'Web Development',
            description:"Web development is the work involved in developing a website for the Internet or an intranet.",
            image:"https://sheygency.netlify.app/images/web.png"
        },
        {
            title:'Mobile Development',
            description:"Mobile development is the work involved in developing a mobile application for mobile devices such as smartphones, tablets, and feature phones.",
            image:"https://sheygency.netlify.app/images/mobile.png"
        },
        {
            title:'Digital Marketing',
            description:"Digital marketing is the work involved in developing a digital marketing strategy and developing a digital marketing plan.",
            image:"https://sheygency.netlify.app/images/digital-marketing.png"
        },
        {
            title:'Graphic Design',
            description:"Graphic design is the work involved in developing a digital marketing strategy and developing a digital marketing plan.",
            image:"https://sheygency.netlify.app/images/graphicdesign.png"
        }
    ]
  return (
    <div className='mt-20'>
        <h1 className='text-secondary text-8xl text-center z-20 sm:text-5xl'>What We Do ?</h1>
        <div className="h-96 w-full bg-primary mt-12"></div>
        <div className="grid grid-cols-4 gap-10 mx-32 -mt-48 xl:grid-cols-1 sm:w-full sm:mx-0 sm:px-5">
            {items.map(item=>{
                return <div className="p-5 bg-white border shadow flex flex-col space-y-5 items-center transform hover:scale-105 duration-300 sm:w-full">
                    <img src={item.image} className="h-20 w-20" alt={item.title}/>
                    <h1 className='text-2xl'>{item.title}</h1>
                    <p className='text-gray-600 text-md'>{item.description}</p>
                </div>
            })}
        </div>
    </div>
  )
}

export default WhatWeDo