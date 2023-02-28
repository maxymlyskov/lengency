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
        <h1 className='text-secondary text-8xl text-center'>What We Do ?</h1>
    </div>
  )
}

export default WhatWeDo