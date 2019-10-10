import React from 'react';
import './Teachers.css'
// import { getTeachers } from '../../services/api-helper';

const Teachers = (props) => {

    const [time, setTime] = React.useState(0)

    const changeTime = (e) => {
        console.log('clicl')
        setTime(e.target.value)
    }
    
    const list = props.allTeachers && props.allTeachers.sort().map((ele,i) => {
        return(
            <div key={ele.id} className='listTeachers'>
                <div className='listUsername'>{ele.username}</div>
                <div className='listName'>{ele.name}</div>
                <div className='listYears'>{ele.years_of_experience}</div>
                <select name="Select Time" onChange={(e) => changeTime(e)} className='selectTeachers'>{ele.availabilities.map(ele1 => {
                    return <option>{ele1.time}</option>
                })}</select>
                <button onClick={() =>  props.postStudentAppointments(ele.id,time)}>Make the appointment</button>
            </div>
        )
    })
    
    return(
        <React.Fragment>
            <div className='listTypes'>
            <div>Username</div> 
            <div>Name</div>
            <div>Years of Experience</div>  
            <div>Select Times</div>
            <div>Times</div>
            </div>
        <div className='teachers'>{list}</div>
        </React.Fragment>
    )
}

export default Teachers;