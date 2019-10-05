import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h2>Auxilium</h2>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
            </div>
            </div>
    )
}

export default Header;