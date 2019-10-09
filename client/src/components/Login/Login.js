import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './login.css'

const Login = (props) => {
    if (props.currentTeacher) {
        return <Redirect to='/profile' />
    } else if (props.currentStudent) {
        return <Redirect to='/profile' />
    }
    const student = (props.type === 'isStudent') ? 
        <form onSubmit={props.logStudent} className='loginForm'>
            <input type='text' placeholder='student username' name="username" value={props.loginStudent.username} onChange={props.logHandleChangeStudent}/>
            <input type='text' placeholder='password' name="password" value={props.loginStudent.password} onChange={props.logHandleChangeStudent}/>
            <button type='submit'>Login</button>
        </form>: ''

    const teacher = (props.type === 'isTeacher') ? 
        <form onSubmit={props.logTeacher} className='loginForm'>
            <input type='text' placeholder='teacher username' name="username" value={props.loginTeacher.username} onChange={props.loginHandleChangeTeacher}/>
            <input type='text' placeholder='password' name="password" value={props.loginTeacher.password} onChange={props.loginHandleChangeTeacher}/>
            <button type='submit'>Login</button>
        </form> : ''
    
    console.log(props)
    return (
        <div className='formComp'>
            <div>{student}</div>
            <div>{teacher}</div>
            

            <Link to='/register' >
                <button>Go register</button>
            </Link>
            </div>
    )
}

export default Login;