import React from 'react'

function ClientsList() {
  const clients = [
    {
        name:"Slack",
        logo:"https://sheygency.netlify.app/images/slack.png",
        url:"https://slack.com",
        description:"Slack is a cloud-based set of tools and services that makes it easy to get work done. It’s built for teams of all sizes, and has a simple, beautiful design that’s easy to use and works great on any device."
    },
    {
        name:"Twitter",
        logo:"https://sheygency.netlify.app/images/twitter.png",
        url:"https://twitter.com",
        description:"Twitter is a social networking service that enables users to send and read short 140-character messages called “tweets”."

    },
    {
        name:"Instagram",
        logo:"https://sheygency.netlify.app/images/instagram.png",
        url:"https://instagram.com",
        description:"Instagram is a photo-sharing, video-sharing and communication service that is owned and operated by Facebook, Inc. It was created by Kevin Systrom and Mike Krieger, and launched in October 2010."
    },
    {
        name:"Spotify",
        logo:"https://sheygency.netlify.app/images/spotify.png",
        url:"https://spotify.com",
        description:"Spotify is a music streaming service that offers a wide range of music genres, including rock, pop, country, electronic, and more. It was created by Swedish computer programmer and programmer Johan Liljegren in 2007."
    },
    {
        name:"Messenger",
        logo:"https://sheygency.netlify.app/images/messenger.png",
        url:"https://facebook.com",
        description:"Messenger is a messaging app that enables users to communicate with their friends and family. It was created by Facebook in 2011."
    },
  ]

  return (
    <div>
        <div className="bg-primary h-44 rounded-b-full"></div>
        <div className="flex justify-center -mt-44">
            <div className="bg-white shadow p-5 w-[500px] border">
                <div className="flex space-x-10 items-center justify-between">
                    <h1 className='text-primary font-semibold text-2xl'>{clients[0].name}</h1>
                    <img className='h-32 w-32' src={clients[0].logo} alt={clients[0].name} />
                </div>
                <p className='text-gray-600 text-md mt-10'>{clients[0].description}</p>
            </div>
        </div>
    </div>
  )
}

export default ClientsList