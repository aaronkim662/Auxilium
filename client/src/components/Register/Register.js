import React from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {
    const student = (props.type === 'isStudent') ? 
        <form onSubmit={props.makeStudent}>
            Student
            <input type='text' placeholder='username' name="username" value={props.registerStudent.username} onChange={props.registerHandleChangeStudent}/>
            <input type='text' placeholder='password' name="password" value={props.registerStudent.password} onChange={props.registerHandleChangeStudent}/>
            <button>Submit</button>
            </form> : ''
    const teacher = (props.type === 'isTeacher') ? 
        <form onSubmit={props.makeTeacher}>
            Teacher
            <input type='text' placeholder='username' name="username" value={props.registerTeacher.username} onChange={props.registerHandleChangeTeacher}/>
            <input type='text' placeholder='password' name="password" value={props.registerTeacher.password} onChange={props.registerHandleChangeTeacher}/>
            <button>Submit</button>
        </form> : ''
    return (
        <div className='formComp'>
            {student}
            {teacher}

            <Link to='/login' >
                <button>Login</button>
            </Link>
            </div>
    )
}

export default Login;