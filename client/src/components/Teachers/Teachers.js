import React from 'react';
import './Teachers.css'
// import { getTeachers } from '../../services/api-helper';

const Teachers = (props) => {
    const list = props.allTeachers && props.allTeachers.map((ele,i) => {
        return(
            <div key={ele.id} className='listTeachers'>
                <div>{ele.username}</div>
                <div>{ele.name}</div>
                <div>{ele.years_of_experience}</div>
                <div>{ele.years_of_experience}</div>
                <div>{ele.times}</div>
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