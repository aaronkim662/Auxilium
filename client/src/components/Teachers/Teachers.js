import React from 'react';
// import { getTeachers } from '../../services/api-helper';

const Teachers = (props) => {
    const list = props.allTeachers && props.allTeachers.map((ele,i) => {
        return(
            <div key={i}>{ele.username}</div>
        )
    })
    
    return(
        <div>{list}</div>
    )
}

export default Teachers;