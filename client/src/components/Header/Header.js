import React from 'react';
import { Link } from 'react-router-dom';
import { bubble as Menu } from 'react-burger-menu';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <h2>Auxilium</h2>
            <div className='navList'>
                <ol><Link to='/' className='list'>Home</Link></ol>
                <ol><Link to='/login' className='list'>Login</Link></ol>
                <ol><Link to='/profile' className='list'>Profile</Link></ol>
                <ol><Link to='/teachers' className='list'>Your Teachers</Link></ol>
                <ol><Link to='/about' className='list'>About</Link></ol>

            </div>
            <Menu className="menuSet" right>
            <ol><Link to='/'>Home</Link></ol>
                <ol><Link to='/login' className='list'>Login</Link></ol>
                <ol><Link to='/profile' className='list'>Profile</Link></ol>
                <ol><Link to='/teachers' className='list'>Your Teachers</Link></ol>
                <ol><Link to='/about' className='list'>About</Link></ol>

        </Menu >
        </div>
    )
}

export default Header;