import React from 'react'
import ReactDOM from 'react-dom'
import {useEffect, useState} from 'react'
import '../Assets/Style/Question.css'

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

    return (
        posts.map((post) => {
            return (
                <div className='nav-question' key={post.id}>
                    <div className='infoUser' key={post.userId}>
                        <img src={post.url}></img>
                        <p>{post.userName}</p>
                    </div>
                    <div className='infoQuestion'>
                        <p>{post.title}</p>
                        <p>{post.body}</p>
                    </div>
                    <div className='footerQuestion'>
                        <p>{post.liked}</p>
                    </div>
                </div>
            )
        })
    )
}

export default Question