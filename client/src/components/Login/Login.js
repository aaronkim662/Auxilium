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
    <div className='formStudent' >
        <h1 className='formGreet'>Hello Student!</h1>
        <div className='formDescription'>Sign in</div>
        <div className='formBox'>

        <form onSubmit={props.logStudent} className='loginForm'>
            <input className='formInput' type='text' placeholder='username' name="username" value={props.loginStudent.username} onChange={props.logHandleChangeStudent}/>
            <input className='formInput' type='text' placeholder='password' name="password" value={props.loginStudent.password} onChange={props.logHandleChangeStudent}/>
            <button className='formButton' type='submit'>Login</button>
        </form>
        <h4>Not a member?</h4>
        <Link to='/register' >
                <button className='formRegister'>Go register</button>
        </Link>
        </div> 
        </div> : ''

    const teacher = (props.type === 'isTeacher') ? 
    <div className='formTeacher' >
        <h1 className='formGreet'>Hello Teacher!</h1>
        <div className='formDescription'>Sign up in</div>
        <div className='formBox'>

        <form onSubmit={props.logTeacher} className='loginForm'>
            <input className='formInput' type='text' placeholder='username' name="username" value={props.loginTeacher.username} onChange={props.loginHandleChangeTeacher}/>
            <input className='formInput' type='text' placeholder='password' name="password" value={props.loginTeacher.password} onChange={props.loginHandleChangeTeacher}/>
            <button className='formButton' type='submit'>Login</button>
        </form>
        <h4>Not a member?</h4>
        <Link to='/register' >
                <button className='formRegister'>Go register</button>
        </Link>
        </div>
        </div> : ''
    
    console.log(props)
    return (
        <>
        {props.type && student}
        {props.type && teacher}
        </>
    )
}

export default Login;