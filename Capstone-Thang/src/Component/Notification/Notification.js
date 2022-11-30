import React from 'react'
import ReactDOM from 'react-dom/client';
import {useEffect, useLayoutEffect, useState, useRef, memo} from 'react'
import { Link, BrowserRouter, Routes, Route} from 'react-router-dom'

import './Notification.css'


// tao random id
function uuid() {
    var temp_url = URL.createObjectURL(new Blob());
    var uuid = temp_url.toString();
    URL.revokeObjectURL(temp_url);
    return uuid.substr(uuid.lastIndexOf('/') + 1); // remove prefix (e.g. blob:null/, blob:www.test.com/, ...)
}

const notisDemo = [
    {
        NotificationID: 7,
        sender: 'Thang',
        Receiver: [
            'Tan',
             'Truong',
             'Khang',
             'Huy'
        ],
        title: 'Nghi bao!',
        content: 'Notification 1',
        date : '1/1/2022',
    },
    {
        NotificationID: 111,
        sender: 'Dat',
        Receiver: {
            userName: 'Tan',
            userName: 'Truong',
            userName: 'Khang',
            userName: 'Huy'
        },
        title: 'Nghi bao!',
        content: 'Notification 1',
        date : '1/1/2022',
    },
    {
        NotificationID: 90,
        sender: 'Thien',
        Receiver: {
            userName: 'Tan',
            userName: 'Truong',
            userName: 'Khang',
            userName: 'Huy'
        },
        title: 'Nghi bao!',
        content: 'Notification 1',
        date : '1/1/2022',
    },
    {
        NotificationID: 5,
        sender: 'Truong',
        Receiver: {
            userName: 'Tan',
            userName: 'Truong',
            userName: 'Khang',
            userName: 'Huy'
        },
        title: 'Nghi bao!',
        content: 'Notification 2',
        date : '1/1/2022',
    },
    {
        NotificationID: 2,
        sender: 'Khang',
        Receiver: {
            userName: 'Tan',
            userName: 'Truong',
            userName: 'Khang',
            userName: 'Huy'
        },
        title: 'Nghi bao!',
        content: 'Notification 3',
        date : '1/1/2022',
    },
    {
        NotificationID: 10,
        sender: 'Huy',
        Receiver: {
            userName: 'Tan',
            userName: 'Truong',
            userName: 'Khang',
            userName: 'Huy'
        },
        title: 'Nghi bao!',
        content: 'Notification 4',
        date : '1/1/2022',
    },
]


// cach 2 - noti
function NavNoti2 (props) {

    const [changeData, setChangeData] = useState([]);
    const handleChangeData = (data) => {
        setChangeData(data);
        props.getData(changeData);
    }
    
    // const [notis, setNotis] = useState([])
    // const apiNoti= 'https://jsonplaceholder.typicode.com/posts';
    // useEffect(() => {
    //     fetch(apiNoti)
    //         .then (response => response.json())
    //         .then(json => {
    //             setNotis(json)
    //         })
    //         .catch(error => console.log('error',error));
    // },[])

    return (
        notisDemo.map((noti) => {               
            return (  
                <div className='info-noti' key={noti.NotificationID}  >
                    <div className='info-user' style={{display:"flex",justifyContent:"space-between"}}>
                        <p>{noti.sender}</p>
                        <p>{noti.date}</p>
                    </div>
                    <div className='info-noti'>
                        <p>{noti.title}</p>
                        <p>{noti.content}</p>  
                    </div>
                    <div>
                        <button onClick={() => {handleChangeData(noti)}}>xem</button>
                    </div>
                </div>
            )
        })
    )
}

const Show2 = memo((props) => {
    const [takeData, setTakeData] = useState();
    useLayoutEffect(() => {
        if (props.dataSend !== takeData) {
            setTakeData(props.dataSend)
        }
    }, [props.dataSend])
    if (takeData) {
        console.log('true')
        console.log(takeData);
        return (
            <div className='showing' key={takeData.NotificationID}>
                <div>
                    <p>{takeData.title}</p>
                </div>
                <div className='' style={{display:"flex",justifyContent:"space-between"}}>
                    <p>{takeData.sender}</p>
                    <p>{takeData.date}</p>
                </div>
                    <p>{takeData.Receiver}</p>
                <div>
                </div>
                <div className=''>
                    <p>{takeData.content}</p>  
                </div>
            </div>
        )
    }
    else {
        console.log('false');
    } 
})
// cach 2 - noti

function NavNotification () {
    const [dataSend, setDataSend] = useState();

    const getData = (data) => {
        setDataSend(data);
    }

    return (
        <div className='noti-box'>
            <div className='nav-noti-left'>
                <NavNoti2 getData={getData} />
            </div>
            <div className='nav-noti-right'>  
                <Show2 dataSend={dataSend}/>
            </div>       
        </div>
    )
}

function Notification () {
    return (
        <NavNotification/>
    )
}

export default Notification