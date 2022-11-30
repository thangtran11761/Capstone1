import React from 'react'
import ReactDOM from 'react-dom/client';
import {useEffect, useLayoutEffect, useState, useRef} from 'react'

const showNoti = (data) => {
    // console.log(data);
    const boxShow = document.querySelector('.nav-noti-right')
    const root = ReactDOM.createRoot(boxShow)
    root.render(<Show myProp={data}/>)
}

// function show chinh
function Show(props)  { 
    console.log(props.myProp)
    // const dataShow = JSON.parse(JSON.stringify(props.prop));
    // if (dataShow !== data) {
    //     dataShow = {...data};
    // }

    // const [data , setData] = useState(JSON.parse(JSON.stringify(datas)))

    // useLayoutEffect(() => {
    //     if (data !== datas) {
    //         setData(datas);
    //     } 
    // },[data])
    
    const [prop , setProp] = useState(props.myProp)

    useLayoutEffect(() => {
        if(prop !== props.myProp) {setProp(props.myProp)}
        
        return () => {
            
        }
    },[prop])

    return (
        <div className='showing'>
            <div>
                <p>{props.myProp.title}</p>
            </div>
            <div className='' style={{display:"flex",justifyContent:"space-between"}}>
                <p>{props.myProp.sender}</p>
                <p>{props.myProp.date}</p>
            </div>
                <p>{props.myProp.Receiver}</p>
            <div>
            </div>
            <div className=''>
                <p>{props.myProp.content}</p>  
            </div>
        </div>
    )
}

export default showNoti