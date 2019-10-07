import React from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {
    return (
        <div className='formComp'>
            <form onSubmit={props.loginT}>
            <input type='text' placeholder='username' name="username" value={props.logTeacher.username} onChange={props.logHC}/>
            <input type='text' placeholder='password' name="password" value={props.logTeacher.password} onChange={props.logHC}/>
            <Link to='/profile' >Login</Link>
            </form>

            <Link to='/register' >
                <button>Go register</button>
            </Link>
            </div>
    )
}

export default Login;