import React from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
function Layout({children}) {
    const navigate = useNavigate()
    const location = useLocation()
    const menuItems = [
        {title: 'Home' , path: '/', icon: 'ri-home-smile-line'},
        {title: 'About' , path: '/about', icon: 'ri-information-line'},
        {title: 'Clients' , path: '/clients', icon: 'ri-user-3-line'},
        {title: 'Contact' , path: '/contact', icon: 'ri-contacts-line'},
    ]
  return (
    <div>
        {/* Content */}
        <div className="pb-44 sm:pb-20 overflow-x-hidden">{children}</div>

        {/* Footer */}
        <div className="fixed bottom-10 left-0 right-0 text-center w-full sm:bottom-0">

            <div className="flex w-full justify-center">
                {menuItems.map((item, i)=>
                    <div key={item.title} className='flex flex-col justify-end items-center '>
                    {location.pathname ===item.path &&  (<div className='flex flex-col items-center'>
                        <div className='h-5 w-10 bg-primary rounded-t-full'></div>
                        <div className='h-5 w-20 bg-primary rounded-t-full text-center'>
                            <i className={`${item.icon} text-xl text-white`}></i>
                        </div>
                    </div>)}
                    <div className={`px-20 xl:px-7  bg-primary py-5 ${i===0 && 'rounded-l'} ${i===menuItems.length-1 && 'rounded-r'} flex items-center justify-center space-x-2`}>
                        {location.pathname !== item.path && <i onClick={()=>navigate(item.path)} className={`${item.icon} text-secondary text-xl cursor-pointer hover:text-gray-600 duration-300`}></i>}
                        <Link to={`${item.path}`} className={`text-secondary text-xl ${item.path!==location.pathname && 'sm:hidden'} hover:text-gray-600 duration-300`}>{item.title}</Link> 
                    </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Layout