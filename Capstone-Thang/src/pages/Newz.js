import React from 'react'
import ReactDOM from 'react-dom'
import {useEffect, useState} from 'react'
import './News.css'


function GetNews () {

    const [news, setNews] = useState([])
    const apiPost = 'https://jsonplaceholder.typicode.com/posts';
    useEffect(() => {
        fetch(apiPost)
            .then (response => response.json())
            .then(json => {
                setNews(json)
            })
            .catch(error => console.log('error',error));
    },[])

    return (       
        news.map((news) => {
            return (
                <div className='nav-news' key={news.id}>   
                        <p>{news.title}</p>
                        <p>{news.body}</p>
                </div>
            )
        })       
    )
}

function News () {
    return (
        <div className='content-news'> 
            <GetNews/>
        </div>           
    )
}

export default News