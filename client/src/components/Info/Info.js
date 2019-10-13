import React from 'react';
import { Link } from 'react-router-dom';
import './info.css';

const Info = (props) => {

    const student = props.currentStudent ? 
    <div className='infoStudent'>
    <div className='infoName'>Hello Student {props.currentStudent.username}</div>
    <div className='infoType'>Name: {props.currentStudent.name}</div>
    <div className='infoType'>Email: {props.currentStudent.email}</div>
    <div className='infoType'>Program: {props.currentStudent.program}</div>
    <div className='infoType'>Cohort: {props.currentStudent.cohort}</div> 
    <Link to='/profile'><button className='infoButton'>Update your information</button></Link>
    </div> : null;

    const teacher = props.currentTeacher ?
    <div className='infoTeacher'>
    <div className='infoName'>Hello Teacher {props.currentTeacher.username}</div>
    <div className='infoType'>Name: {props.currentTeacher.name}</div>
    <div className='infoType'>Email: {props.currentTeacher.email}</div>
    <div className='infoType'>Years of Experience: {props.currentTeacher.years_of_experience}</div>
    {props.teacherTimes.length !== 0 ? 
    <div className='infoType'>Your Times {props.teacherTimes.map((ele,i) => {
        return(
            <div className='infoTimes'>
            <div key={i}>{ele.time}</div>
            <button className='infoDelete' onClick={() => props.deleteTime(ele.id)}>Delete this time</button>
            </div>
        )
    })}</div> : <div className='infoType'>Post your times</div> }

    <Link to='/profile'><button className='infoButton'>Update your information</button></Link>
    </div> : null;
    console.log(props)
                    
    return (
        <>
            {student}
            {teacher}
        </>
        )
}

export default Info;