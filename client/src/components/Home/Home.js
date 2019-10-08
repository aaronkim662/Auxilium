import React from 'react';
import './home.css'

const Home = (props) => {
    return (
        <div className='homeStyle'>
            <div className='homeBox'>
            <h2 className='homeTitle'>Are you a </h2>
            <button className='homeButton' name='student' onClick={props.handleClickType}>Student</button>
            <h4 className='homeTitle'>Or </h4>
            <button className='homeButton' name='teacher' onClick={props.handleClickType}>Teacher</button>
        </div>
        </div>
    )
}

export default Home;