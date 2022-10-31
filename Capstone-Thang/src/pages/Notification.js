import React from 'react'
import './Notification.css'
const lists = [
    {
        idNoti: 1,
        userName: 'Thang',
        title: 'Nghi bao!',
        content: 'a',
    },
    {
        idNoti: 2,
        userName: 'Thang',
        title: 'Nghi bao!',
        content: 'a',
    },
    {
        idNoti: 3,
        userName: 'Thang',
        title: 'Nghi bao!',
        content: 'a',
    },
    {
        idNoti: 4,
        userName: 'Thang',
        title: 'Nghi bao!',
        content: 'a',
    }
]
function Notification () {
    return (
        lists.map((list) => {
            return (
                <div className='nav-noti'>
                    <div className='infoUser'>
                        <p>{list.userName}</p>
                    </div>
                    <div className='infoNoti'>
                        <p>{list.title}</p>
                        <p>{list.content}</p>
                    </div>
                </div>
            )
        })
    )
}

export default Notification