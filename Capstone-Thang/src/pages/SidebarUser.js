import {Link} from 'react-router-dom'
import './SidebarUser.css'

function SidebarUser () {
    return (
      <div className="side-bar">
        <div className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder='Search'></input>
        </div>
        <div className="menu">
          <h2>MENU</h2>
          <ul>
            <li>      
              <Link className="link noti" to="/Notification">
                <i className="fa-regular fa-bell"></i>
                <p>Notification</p>
              </Link>
            </li>
            <li>
              <Link className="link news" to="/News">
                <i className="fa-solid fa-newspaper"></i>
                <p>News</p>
              </Link>
            </li>
            <li>
              <Link className="link forum" to="/Forum">
                <i className="fa-solid fa-house"></i>
                <p>Forum</p>
              </Link>
            </li>           
          </ul>
        </div>
        <div className="person">
          <p>PERSONAL NAVIGATOR</p>
          <ul>
            <li >      
              <Link className="link Celendar" to="/Celendar">
                <i className="fa-regular fa-calendar"></i>  
                <p>Your Celendar</p>
              </Link>
            </li>
            <li >
                <Link className="link Question" to="/Question">
                  <i className="fa-regular fa-circle-question"></i>
                  <p>Your Question</p>
                </Link>
            </li>
            <li >
              <Link className="link Chat" to="/Chat">
                <i className="fa-regular fa-comments"></i>
                <p>Chat</p>
              </Link>
            </li >
          </ul> 
        </div>
      </div>
    )
}

export default SidebarUser