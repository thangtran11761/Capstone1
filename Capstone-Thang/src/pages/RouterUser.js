import { Routes, Route} from 'react-router-dom'
import Forum from './Forum'
import Notification from './Notification'
import News from './Newz'
import Question from './Question'
import Chat from './Chat'
import Celendar from './Celendar'


function RouterUser() {
    return (
        <Routes>
            <Route  path="/Notification" element={<Notification/>} />
            <Route  path="/News" element={<News/>} />
            <Route  path="/Forum" element={<Forum/>} />
            <Route  path="/Celendar" element={<Celendar/>} />
            <Route  path="/Question" element={<Question/>} />
            <Route  path="/Chat" element={<Chat/>} />
        </Routes>
    )
}

export default RouterUser