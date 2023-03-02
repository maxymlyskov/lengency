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
        <div className="bg-primary h-44 rounded-b-full sm:rounded-b-2xl"></div>
        <div className="flex justify-center -mt-44 sm:-mt-20 items-end space-x-10 sm:space-x-0 sm:p-5">
            {selectedClientIndex!==0 && <i onClick={previous} className="ri-arrow-left-line  sm:hidden text-4xl text-gray-600 cursor-pointer hover:bg-gray-700 p-2 hover:text-white hover:rounded duration-300"></i>}
            <div className="grid grid-cols-3 gap-10 xl:grid-cols-1 ">
            {[clients[selectedClientIndex],clients[selectedClientIndex+1],clients[selectedClientIndex+2]].map(item=>{
                return <div key={item.name} className="bg-white shadow p-5 w-[400px] sm:w-auto border h-[300px] sm:h-auto">
                <div className="flex space-x-10 items-center justify-between sm:space-x-0 sm:flex-col">
                    <img className='h-32 w-32 -mt-14 sm:w-20 sm:h-20' src={item.logo} alt={item.name} />
                    <h1 className='text-primary font-semibold text-2xl'>{item.name}</h1>
                </div>
                <p className='text-gray-600 text-md mt-10'>{item.description}</p>
            </div>
            })}
            </div>
            {selectedClientIndex<2 && <i onClick={next} className="ri-arrow-right-line sm:hidden text-4xl text-gray-600 cursor-pointer hover:bg-gray-700 p-2 hover:text-white hover:rounded duration-300"></i>}
        </div>
        <div className="flex justify-center mt-10">
            <div  className="flex space-x-2">
                {[1,2,3].map((item,i)=>{
                    return <div key={item} onClick={()=>setSelectedClientIndex(i)} className={`bg-gray-300 h-4 w-4 rounded-full cursor-pointer transform transition-all hover:scale-104 duration-200 ${selectedClientIndex === i && 'border-2 border-secondary h-5 w-5'}`}></div>
                })}
            </div>
        </div>
        <Numbers/>
    </div>
  )
}

export default ClientsList