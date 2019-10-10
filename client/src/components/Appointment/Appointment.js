import React from 'react';


const Appointment = (props) => {
    console.log('appoint',props)
    const list = props.appointments && props.appointments.map(ele => {
        return (
            <>
            {/* <div>{ele.username}</div> */}
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