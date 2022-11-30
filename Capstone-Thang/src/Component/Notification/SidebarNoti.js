import {Link} from 'react-router-dom'

function SidebarNoti () {
    return (
        <ul>
            <li><Link className='link-noti' to="/Inbox">Inbox</Link></li>
            <li><Link className='link-noti' to="/Sent">Sent</Link></li>                    
        </ul>
    )
}

export default SidebarNoti