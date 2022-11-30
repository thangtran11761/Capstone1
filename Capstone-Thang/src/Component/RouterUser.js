import { Routes, Route} from 'react-router-dom'
import Forum from '../Component/Forum'
import Notification from '../Component/Notification/Notification'
import News from '../Component/Newz'
import Question from '../Component/Question'
import Chat from '../Component/Chat'
import Celendar from '../Component/Celendar'
import Form from '../Component/Form/Form'


function RouterUser() {
    return (
        <Routes>
            <Route  path="/Notification" element={<Notification/>} />
            <Route  path="/News" element={<News/>} />
            <Route  path="/Forum" element={<Forum/>} />
            <Route  path="/Celendar" element={<Celendar/>} />
            <Route  path="/Question" element={<Question/>} />
            <Route  path="/Chat" element={<Chat/>} />
            <Route  path="/Form" element={<Form/>}/ >
        </Routes>
    )
}

export default RouterUser