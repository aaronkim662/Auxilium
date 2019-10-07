import React from 'react';

const Form = (props) => {
    return (
        <div className='formComp'>
            <form onSubmit={props.makeTeacher}>
            <input type='text' placeholder='username' name="username" value={props.regTeacher.username} onChange={props.regHCuser}/>
            <input type='text' placeholder='password' name="password" value={props.regTeacher.password} onChange={props.regHCpass}/>
            <button>Submit</button>
            </form>
            </div>
    )
}

export default Form;