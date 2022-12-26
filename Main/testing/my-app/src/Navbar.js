import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav>
                <div>
                    <Link to='/'>
                       TRVL 
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar;