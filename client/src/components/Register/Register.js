import React from 'react';
import { Link } from 'react-router-dom';
import './register.css';

const Login = (props) => {

    const student = (props.type === 'isStudent') ? 
    <div className='registerStudent' >
        <form className='registerForm' onSubmit={props.makeStudent}>
            <input className='registerInput' type='text' placeholder='username' name="username" value={props.registerStudent.username} onChange={props.registerHandleChangeStudent}/>
            <input className='registerInput' type='text' placeholder='password' name="password" value={props.registerStudent.password} onChange={props.registerHandleChangeStudent}/>
            <button className='registerButton'>Register</button>
        </form>
        <h2>Already a user?</h2>
        <Link to='/login' >
            <button className='registerLogin'>Login </button>
        </Link>
    </div> 
    : null

    const teacher = (props.type === 'isTeacher') ? 
    <div className='registerTeacher' >
        <form className='registerForm' onSubmit={props.makeTeacher}>
            <input  className='registerInput'type='text' placeholder='username' name="username" value={props.registerTeacher.username} onChange={props.registerHandleChangeTeacher}/>
            <input className='registerInput' type='text' placeholder='password' name="password" value={props.registerTeacher.password} onChange={props.registerHandleChangeTeacher}/>
            <button className='registerButton'>Register</button>
        </form> 
        <h2>Already a user?</h2>
        <Link to='/login' >
                <button className='registerLogin'>Login</button>
            </Link>
    </div> 
    : null
    return (
        <div className='registerComp'>
            {student}
            {teacher}            
            </div>
    )
}

export default Login;