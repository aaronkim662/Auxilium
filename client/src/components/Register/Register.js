import React from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {
    return (
        <div className='formComp'>
            <form onSubmit={props.makeTeacher}>
            <input type='text' placeholder='username' name="username" value={props.regTeacher.username} onChange={props.regHCuser}/>
            <input type='text' placeholder='password' name="password" value={props.regTeacher.password} onChange={props.regHCpass}/>
            <button>Submit</button>
            </form>

            <Link to='/login' >
                <button>Login</button>
            </Link>
            </div>
    )
}

export default Login;