import React from 'react'
import { Link, Outlet, BrowserRouter, Routes, Route} from 'react-router-dom'
import './Form.css'

export const Form1 = () => {
    return (
        <>
            <h1>Form 1</h1>
        </>
    )
}
export const Form2 = () => {
    
}
export const Form3 = () => {
    
}
export const Form4 = () => {

}
export const Form5 = () => {
    
}
export const Form6 = () => {
    
}

const SidebarForm = () => { 
    return (
        <>
            <ul>
                <li>
                    <Link className='link-form' to="/Form1">Application for confirmation of poor household</Link>
                </li>
                <li>
                    <Link className='link-form' to="/Form2">Near-poor household certification form</Link>
                </li>
                <li>
                    <Link className='link-form' to="/Form3">Application for leave of absence from school</Link>
                </li>
                <li>
                    <Link className='link-form' to="/Form4">Application to transfer school</Link>
                </li>
                <li>
                    <Link className='link-form' to="/Form5">Application form for leaving school</Link>
                </li>
                <li>
                    <Link className='link-form' to="/Form6">Application form for class transfer</Link>
                </li>
            </ul> 
        </>

    )
}

function RouterForm () {
    return (
        <Routes>
            <Route path='/Form1' element={<Form1/>}/>
            <Route path='/Form2' element={<Form2/>}/>
            <Route path='/Form3' element={<Form3/>}/>
            <Route path='/Form4' element={<Form4/>}/>
            <Route path='/Form5' element={<Form5/>}/>
            <Route path='/Form6' element={<Form6/>}/>
        </Routes>
    )
}

function AppForm () {
    return (
        <div className='app-form'>
            <div className='form-sidebar'>
                <SidebarForm/>
            </div>
            <div className='form-content'>
                
            </div>
        </div>
    )
}


function Form () {
    return (
        <div className='form'>   
                <h1>hehe</h1>         
        </div>
    )
}

export default Form
