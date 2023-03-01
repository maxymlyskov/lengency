import {useState} from 'react'
import Numbers from './Numbers';

function ClientsList() {
  const [selectedClientIndex, setSelectedClientIndex] = useState(0);

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

  const previous = ()=>{
    setSelectedClientIndex(selectedClientIndex-1)
}
  const next = ()=>{
    if(selectedClientIndex < 2)  setSelectedClientIndex(selectedClientIndex+1)
}

  return (
    <div>
        <div className="bg-primary h-44 rounded-b-full"></div>
        <div className="flex justify-center -mt-44 items-end space-x-10">
            {selectedClientIndex!==0 && <i onClick={previous} className="ri-arrow-left-line text-4xl text-gray-600 cursor-pointer hover:bg-gray-700 p-2 hover:text-white hover:rounded duration-300"></i>}
            <div className="grid grid-cols-3 gap-10">
            {[clients[selectedClientIndex],clients[selectedClientIndex+1],clients[selectedClientIndex+2]].map(item=>{
                return <div className="bg-white shadow p-5 w-[400px] border h-[300px]">
                <div className="flex space-x-10 items-center justify-between">
                    <img className='h-32 w-32 -mt-14' src={item.logo} alt={item.name} />
                    <h1 className='text-primary font-semibold text-2xl'>{item.name}</h1>
                </div>
                <p className='text-gray-600 text-md mt-10'>{item.description}</p>
            </div>
            })}
            </div>
            {selectedClientIndex<2 && <i onClick={next} className="ri-arrow-right-line text-4xl text-gray-600 cursor-pointer hover:bg-gray-700 p-2 hover:text-white hover:rounded duration-300"></i>}
        </div>
        <div className="flex justify-center mt-10">
            <div  className="flex space-x-2">
                {[1,2,3].map((item,i)=>{
                    return <div onClick={()=>setSelectedClientIndex(i)} className={`bg-gray-300 h-4 w-4 rounded-full cursor-pointer transform transition-all hover:scale-104 duration-200 ${selectedClientIndex === i && 'border-2 border-secondary h-5 w-5'}`}></div>
                })}
            </div>
        </div>
        <Numbers/>
    </div>
  )
}

export default ClientsList