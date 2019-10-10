import React from 'react';
import './home.css'

const Home = (props) => {
    return (
        <div className='homeContainer'>
        <div className='homeStyle'>
            <div className='homeDescription'>
                <h1>Welcome to Auxilium</h1>
                <h5>A site where help doesn't just end at school</h5>
            </div>

            <div className='homeBox'>
            <h2 className='homeTitle'>Are you a </h2>
            <div className='teacherStudentBox'>
                <button className='homeButton' name='student' onClick={props.handleClickType}>Student</button>
                <h4 className='homeTitle'>Or </h4>
                <button className='homeButton' name='teacher' onClick={props.handleClickType}>Teacher</button>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Home;