import React from 'react';
import  './style/header.css';
import {
    Link
} from "react-router-dom";
function header() {
    return (
        <div className='header'>
            <div className='logo'>
                <h3>My Movie Theater</h3>
            </div>
            <div className='link'>
                <Link to={`/`} >Home</Link>
                <Link to={`/my-movies`} >My Movies</Link>
                <Link to={`/top-rated`} >Top Rated</Link>
                <Link to={`/upcoming`} >Upcoming Movies</Link>
            </div>
        </div>
    )
}

export default header;