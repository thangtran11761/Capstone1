import React from 'react'
import ReactDOM from 'react-dom'
import {useEffect, useState} from 'react'
import './News.css'

const newsDemo = [
    {
        id: 1,
        ava: "https://avatars.githubusercontent.com/u/6412038?s=280&v=4",
        userName:"Thang",
        timeNews:"20/10/2022",
        title: "VCS",
        body: "Thay doi cup CKTG",
        img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/48405033_555156074949095_2653325598834819072_n.png?stp=dst-png_p100x100&_nc_cat=111&ccb=1-7&_nc_sid=4de414&_nc_ohc=2V-iiYy2MjkAX8VHcCY&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTWyGM8AHLP1MEKqWAM5gkFWLrMVH3811TliojBME_Rxg&oe=638552FF",
        liked: 100,
    },
    {
        id: 2,
        ava: "https://avatars.githubusercontent.com/u/6412038?s=280&v=4",
        userName:"Thang",
        timeNews:"20/10/2022",
        title: "VCS",
        body: "Thay doi cup CKTG",
        img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/48405033_555156074949095_2653325598834819072_n.png?stp=dst-png_p100x100&_nc_cat=111&ccb=1-7&_nc_sid=4de414&_nc_ohc=2V-iiYy2MjkAX8VHcCY&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTWyGM8AHLP1MEKqWAM5gkFWLrMVH3811TliojBME_Rxg&oe=638552FF",
        liked: 100,
    },
    {
        id: 3,
        ava: "https://avatars.githubusercontent.com/u/6412038?s=280&v=4",
        userName:"Thang",
        timeNews:"20/10/2022",
        title: "VCS",
        body: "Thay doi cup CKTG",
        img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/48405033_555156074949095_2653325598834819072_n.png?stp=dst-png_p100x100&_nc_cat=111&ccb=1-7&_nc_sid=4de414&_nc_ohc=2V-iiYy2MjkAX8VHcCY&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTWyGM8AHLP1MEKqWAM5gkFWLrMVH3811TliojBME_Rxg&oe=638552FF",
        liked: 100,
    },
    {
        id: 4,
        ava: "https://avatars.githubusercontent.com/u/6412038?s=280&v=4",
        userName:"Thang",
        timeNews:"20/10/2022",
        title: "VCS",
        body: "Thay doi cup CKTG",
        img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/48405033_555156074949095_2653325598834819072_n.png?stp=dst-png_p100x100&_nc_cat=111&ccb=1-7&_nc_sid=4de414&_nc_ohc=2V-iiYy2MjkAX8VHcCY&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTWyGM8AHLP1MEKqWAM5gkFWLrMVH3811TliojBME_Rxg&oe=638552FF",
        liked: 100,
    },{
        id: 5,
        ava: "https://scontent.xx.fbcdn.net/v/t1.15752-9/48405033_555156074949095_2653325598834819072_n.png?stp=dst-png_p100x100&_nc_cat=111&ccb=1-7&_nc_sid=4de414&_nc_ohc=2V-iiYy2MjkAX8VHcCY&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTWyGM8AHLP1MEKqWAM5gkFWLrMVH3811TliojBME_Rxg&oe=638552FF",
        userName:"Thang",
        timeNews:"20/10/2022",
        title: "VCS",
        body: "Thay doi cup CKTG",
        img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/48405033_555156074949095_2653325598834819072_n.png?stp=dst-png_p100x100&_nc_cat=111&ccb=1-7&_nc_sid=4de414&_nc_ohc=2V-iiYy2MjkAX8VHcCY&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTWyGM8AHLP1MEKqWAM5gkFWLrMVH3811TliojBME_Rxg&oe=638552FF",
        liked: 100,
    },{
        id: 5,
        ava: "https://scontent.xx.fbcdn.net/v/t1.15752-9/48405033_555156074949095_2653325598834819072_n.png?stp=dst-png_p100x100&_nc_cat=111&ccb=1-7&_nc_sid=4de414&_nc_ohc=2V-iiYy2MjkAX8VHcCY&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTWyGM8AHLP1MEKqWAM5gkFWLrMVH3811TliojBME_Rxg&oe=638552FF",
        userName:"Thang",
        timeNews:"20/10/2022",
        title: "VCS",
        body: "Thay doi cup CKTG",
        img: "https://scontent.xx.fbcdn.net/v/t1.15752-9/48405033_555156074949095_2653325598834819072_n.png?stp=dst-png_p100x100&_nc_cat=111&ccb=1-7&_nc_sid=4de414&_nc_ohc=2V-iiYy2MjkAX8VHcCY&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTWyGM8AHLP1MEKqWAM5gkFWLrMVH3811TliojBME_Rxg&oe=638552FF",
        liked: 100,
    }
]

const commentsDemo = [
    {
        userId: 1,
        ava:"https://scontent.xx.fbcdn.net/v/t1.15752-9/48405033_555156074949095_2653325598834819072_n.png?stp=dst-png_p100x100&_nc_cat=111&ccb=1-7&_nc_sid=4de414&_nc_ohc=2V-iiYy2MjkAX8VHcCY&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTWyGM8AHLP1MEKqWAM5gkFWLrMVH3811TliojBME_Rxg&oe=638552FF",
        userName:"Thang",
        content: "Dep qua troi la dep lun qua tuyet voi Dep qua troi la dep lun qua tuyet voiDep qua troi la dep lun qua tuyet voi  ",
    },
    {
        userId: 2,
        ava:"https://scontent.xx.fbcdn.net/v/t1.15752-9/48405033_555156074949095_2653325598834819072_n.png?stp=dst-png_p100x100&_nc_cat=111&ccb=1-7&_nc_sid=4de414&_nc_ohc=2V-iiYy2MjkAX8VHcCY&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTWyGM8AHLP1MEKqWAM5gkFWLrMVH3811TliojBME_Rxg&oe=638552FF",
        userName:"Thang",
        content: "Dep vkl",
    }
]

function GetNews () {

    const [news, setNews] = useState([])
    const apiNews = 'https://jsonplaceholder.typicode.com/posts';
    useEffect(() => {
        fetch(apiNews)
            .then (response => response.json())
            .then(json => {
                setNews(json)
            })
            .catch(error => console.log('error',error));
    },[])

    return (       
        newsDemo.map((news) => {
            return (
                <div className='nav-news' key={news.id}>  
                    <div className='info-user-news'>
                        <img className='ava-user-news' src={news.ava}></img>
                        <div>
                            <p className='name-user-news'>{news.userName}</p>
                            <p className='time-news'>{news.timeNews}</p>
                        </div>
                    </div> 
                    <div className='content-news'>
                        <div className='content-news-header'>
                            <p className='title-content-news'>{news.title}</p>
                            <p className='body-content-news'>{news.body}</p>
                        </div>
                        <img className='img-content-news' src={news.img}></img>
                    </div>
                    <div  className='footer-news'>
                        <div className='nav-like'>
                            <i className='icon-like'>icon</i>
                            <p className='liked'>{news.liked}</p>
                        </div>
                        <div className='footer-button'>
                            <button className='footer-button-like'>Like</button>
                            <button className='footer-button-comment' onClick={showComment}>Comment</button>
                        </div>
                    </div>
                    <div className='div-write-comment'>
                        <input className='input-write-comment' type="text" placeholder='Write your comment...'></input>
                    </div>
                    <div className='box-show-comment'>
                        <GetComment/>
                    </div>

                </div>
            )
        })       
    )
}

function GetComment () {
    const [comments, setComments] = useState([])
    const apiComment = 'https://jsonplaceholder.typicode.com/posts/comments';
    useEffect(() => {
        fetch(apiComment)
            .then (response => response.json())
            .then(json => {
                setComments(json)
            })
            .catch(error => console.log('error',error));
    },[])
    return (
        commentsDemo.map((comment) => {
            return (
                <div className='user-comment' key={comment.useId}>
                    <div className='user-comment-left'>
                        <img className='ava-user-comment' src={comment.ava}></img>
                    </div>
                    <div className='user-comment-right'>
                        <div className='content-comment'>
                            <p className='user-name-comment'>{comment.userName}</p>
                            <p className='user-content-comment'>{comment.content}</p>
                        </div>
                        <div className='function-comment'>
                            <ul>
                                <li>Like</li>
                                <li>Reply</li>
                            </ul>
                        </div>
                    </div>                  
                </div>
            )
        })
    )
}

const showComment = () => {
    const divComment = document.querySelector('.box-show-comment');
    const active = divComment.classList.contains('active');
    if (active) {
        document.querySelector('.box-show-comment.active').classList.remove('active');
        divComment.style.display = "none";
    }
    else {
        divComment.classList.add('active');
        divComment.style.display = "block";
    }
}

function News () {
    return (
        <div className='box-news'> 
            <GetNews/>
        </div>           
    )
}

export default News