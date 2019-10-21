import React from 'react';
import { Link } from 'react-router-dom';
import { bubble as Menu } from 'react-burger-menu';
import './header.css';

const Header = (props) => {

    const profile = props.currentStudent || props.currentTeacher ? 
    <ol><Link to='/profile' className='list'>Profile</Link></ol> : null; 

    const logout = props.currentStudent || props.currentTeacher ? 
    <ol><Link to='' onClick={props.handleLogout} className='list'>Logout</Link></ol> : null;

    const appointment = props.currentStudent ?
    <ol><Link to='/appointment' className='list'>Appointment</Link></ol> : null;

    return (
        <div className="header">
            <Link to='/' className='headerName'><h2 className='aux'>Auxilium</h2></Link>
            <div className='navList'>
                <ol><Link to='/' className='list'>Home</Link></ol>
                {profile}
                <ol><Link to='/teachers' className='list' onClick={props.getAllTeachers}>Teachers</Link></ol>
                {appointment}
                {logout}
            </div>
            <Menu className="menuSet" right>
            <ol><Link to='/'>Home</Link></ol>
                {profile}
                <ol><Link to='/teachers' className='list'>Teachers</Link></ol>
                {appointment}
                {logout}
        </Menu >
        </div>
    )
}

export default Header;