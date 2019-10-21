import React from 'react';
import './Teachers.css'
// import { getTeachers } from '../../services/api-helper';

const Teachers = (props) => {

    const [time, setTime] = React.useState()

    const changeTime = (e) => {
        console.log(e.target.value)
        
        setTime(e.target.value)
    }
    
    const list = props.currentStudent ? props.allTeachers && props.allTeachers.map((ele,i) => {
        return(
            <div key={ele.id} className='listTeachers' id={i}>
                <div className='listUsername'>{ele.username}</div>
                {/* <div className='listName'>{ele.name}</div> */}
                <div className='listYears'>{ele.years_of_experience}</div>
                <select 
                name="Select Time" 
                onChange={(e) => changeTime(e)} 
                className='selectTeachers'>{ele.availabilities.map((ele1,j) => {
                    return(
                    <option 
                    key={j}
                    value={ele1.time}>{ele1.time}</option>

                    )
                })}</select>
                <button onClick={() =>  props.postStudentAppointments(ele,time)}>Make the appointment</button>
            </div>
        )
    }) : props.allTeachers && props.allTeachers.sort().map((ele,i) => {
        return(
            <div key={ele.id} className='listTeachers' id={i}>
                <div className='listUsername'>{ele.username}</div>
                {/* <div className='listName'>{ele.name}</div> */}
                <div className='listYears'>{ele.years_of_experience}</div>
                <select 
                name="Select Time" 
                onChange={(e) => changeTime(e)} 
                className='selectTeachers'>{ele.availabilities && ele.availabilities.map((ele1,j) => {
                    return <option key={j}>{ele1.time}</option>

                })}</select>
            </div>
        )
    }) 
    
    const learn = props.currentStudent ?  <div>Click to learn!</div> :
    null

    return(
        <React.Fragment>
            <div className='listTypes'>
            <div>Username</div> 
            <div>Years of Experience</div>  
            <div>Select Times</div>
            {learn}
            </div>
        <div className='teachers'>{list}</div>
        </React.Fragment>
    )
}

export default Teachers;