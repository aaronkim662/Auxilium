import React from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {
    return (
        <div className='formComp'>
            <form onSubmit={props.makeTeacher}>
            <input type='text' placeholder='username' name="username" value={props.registerTeacher.username} onChange={props.registerHandleChangeTeacher}/>
            <input type='text' placeholder='password' name="password" value={props.registerTeacher.password} onChange={props.registerHandleChangeTeacher}/>
            <button>Submit</button>
            </form>

            <Link to='/login' >
                <button>Login</button>
            </Link>
            </div>
    )
}

export default Login;