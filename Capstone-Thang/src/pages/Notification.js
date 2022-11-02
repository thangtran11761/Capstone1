import React from 'react'
import {useEffect, useState} from 'react'
import './Notification.css'
const notisDemo = [
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

function GetNotification() {
    const [notis, setNotis] = useState([])
    const apiNoti= 'https://jsonplaceholder.typicode.com/posts/comments';
    useEffect(() => {
        fetch(apiNoti)
            .then (response => response.json())
            .then(json => {
                setNotis(json)
            })
            .catch(error => console.log('error',error));
    },[])
    return (
        notisDemo.map((noti) => {
            return (
                <div className='nav-noti' key={noti.idNoti}>
                    <div className='infoUser'>
                        <p>{noti.userName}</p>
                    </div>
                    <div className='infoNoti'>
                        <p>{noti.title}</p>
                        <p>{noti.content}</p>
                    </div>
                </div>
            )
        })
    )
}

function ShowNotification() {
    const [noti, setNoti] = useState([])
    const apiNotiShow= 'https://jsonplaceholder.typicode.com/Notifications/id';
    useEffect(() => {
        fetch(apiNotiShow)
   2         .then (response => response.json())
            .then(json => {
                setNoti(json)
            })
            .catch(error => console.log('error',error));
    },[])
    return (
        <div></div>
    )
}

function checkOnOffNavNoti() {

}

function Notification () {
    return (
        <div className='noti'>
            <div className='main-noti-show'>
                <GetNotification/>
            </div>
            <div className='nav-noti-show'></div>
        </div>
    )
}

export default Notification