import React from 'react'
import {Link} from 'react-router-dom'
function Layout({children}) {
    const menuItems = [
        {title: 'Home' , path: '/', icon: ''},
        {title: 'About' , path: '/about', icon: ''},
        {title: 'Clients' , path: '/clients', icon: ''},
        {title: 'Contact' , path: '/contact', icon: ''},
    ]
  return (
    <div>
        {/* Content */}
        <div className="">{children}</div>

        {/* Footer */}
        <div className="fixed bottom-10 left-0 right-0 text-center w-full">
            <div className="flex w-full justify-center">
                {menuItems.map((item, i)=><div className={`px-20 bg-primary py-5 ${i===0 && 'rounded-l'} ${i===menuItems.length-1 && 'rounded-r'}`}>
                    <Link to={`${item.path}`} className="text-secondary text-xl">{item.title}</Link> 
                </div>)}
            </div>
        </div>
    </div>
  )
}

export default Layout