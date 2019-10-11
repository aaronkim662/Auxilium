import React from 'react';
import './appointment.css'

const Appointment = (props) => {

    const list = props.appointments && props.appointments.map((ele,i) => {
        return (
            <div className='appointment' key={i}>
            <div>Your teacher is: {ele.teacher && ele.teacher.username}</div>
            <div>At: {ele.time && ele.time}</div>
            </div> 
        )
    }) 
    return (
        <>
        <div className='appointmentBox'>
        <h2>Your Appointments</h2>
        {list}
        </div>
        </>
    )
}

export default Appointment;