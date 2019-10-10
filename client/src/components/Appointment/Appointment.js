import React from 'react';


const Appointment = (props) => {
    console.log('appoint',props)
    const list = props.appointments && props.appointments.map( (ele,i) => {

        //make the api call here
        // add the returned name to the object
        // const teacher = await props.getTeacherOne(ele.teacher_id)
        // console.log(teacher)
        return (
            <>
            <div>{props.oneTeacher[i]}</div>
            <div>{ele.time}</div>
            </>
        )
    })
    return (
        <>
        {list}
        </>
    )
}

export default Appointment;