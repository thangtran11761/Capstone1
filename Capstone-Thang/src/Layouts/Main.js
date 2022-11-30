import React from 'react'
import SidebarUser from '../Component/SidebarUser'
import RouterUser from '../Component/RouterUser'

function Main () {
    return (
       <>
            <SidebarUser/>
            <div className='content'>  
                <RouterUser/> 
            </div>
       </>
    )
}

export default Main