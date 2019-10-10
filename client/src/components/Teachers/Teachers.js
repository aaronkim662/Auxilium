import React from 'react';
import './Teachers.css'
// import { getTeachers } from '../../services/api-helper';

const Teachers = (props) => {
    // const button = props.currentStudent ? 
    // <button onClick={() => props.postStudentAppointments(ele.id, yel.time)}>Add</button> : ''

    const list = props.allTeachers && props.allTeachers.sort().map((ele,i) => {
        return(
            <div key={ele.id} className='listTeachers'>
                <div className='listUsername'>{ele.username}</div>
                <div className='listName'>{ele.name}</div>
                <div class='listYears'>{ele.years_of_experience}</div>
                <select className='selectTeachers'>{ele.availabilities.map(ele1 => {
                    return <option >{ele1.time}</option>
                })}</select>
                {/* {button} */}
            </div>
        )
    })
    
    return(
        <React.Fragment>
            <div className='listTypes'>
            <div>Username</div> 
            <div>Name</div>
            <div>Years of Experience</div>  
            <div>Times</div>
            </div>
        <div className='teachers'>{list}</div>
        </React.Fragment>
    )
}

export default Teachers;