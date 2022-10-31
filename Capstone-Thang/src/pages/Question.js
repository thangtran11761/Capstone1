import React from 'react'
import ReactDOM from 'react-dom'
import {useEffect, useState} from 'react'
import './Question.css'

function Question () {

    const [posts, setPosts] = useState([])
    const apiPost = 'https://jsonplaceholder.typicode.com/posts';
    useEffect(() => {
        fetch(apiPost)
            .then (response => response.json())
            .then(json => {
                setPosts(json)
            })
            .catch(error => console.log('error',error));
    },[])

    // const [users, setUsers] = useState([])
    // const apiUser = 'https://jsonplaceholder.typicode.com/users';
    // useEffect(() => {
    //     fetch(apiUser)
    //         .then (response => response.json())
    //         .then(json => {
    //             setUsers(json)
    //         })
    //         .catch(error => console.log('error',error));
    // },[])
    

    return (
        posts.map((post) => {
            return (
                <div className='nav-question'>
                    <div className='infoUser'>
                        <p></p>
                    </div>
                    <div className='infoQuestion'>
                        <p>{post.title}</p>
                        <p>{post.body}</p>
                    </div>
                    <div className='footerQuestion'>
                        <p></p>
                    </div>
                </div>
            )
        })
    )
}

export default Question