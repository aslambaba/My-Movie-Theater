import React from 'react';
import  './style/header.css';

function header() {
    return (
        <div className='header'>
            <div className='logo'>
                <h3>My Movie Theater</h3>
            </div>
            <div className='link'>
                <a href='/'>Home</a>
                <a href='/movies'>My Movies</a>
                <a href='/movies'>Top Rated</a>
                <a href='/movies'>Upcoming Movies</a>
            </div>
        </div>
    )
}

export default header;