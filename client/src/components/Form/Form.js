import React from 'react';
import { Link } from 'react-router-dom';

const Form = (props) => {
    return (
        <div className='formComp'>
            <form onSubmit={props.makeTeacher}>
            <input type='text' placeholder='username' name="username" value={props.regTeacher.username} onChange={props.regHC}/>
            <input type='text' placeholder='password' name="password" value={props.regTeacher.password} onChange={props.regHC}/>
            <button>Register</button>
            </form>

            <Link to='/login' >
                <button>Login</button>
            </Link>
            </div>
    )
}

export default Form;