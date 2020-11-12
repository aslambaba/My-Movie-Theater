import React from 'react';
import './style/footer.css';

function Footer() {
    return (
        <div className='Footer'>
            <div className='logo'>
                <h3>My Movies Theater</h3>
            </div>
            <div className='Quicklinks'>
                <a href='/'>Home</a>
                <a href='/movies'>My Movies</a>
                <a href='/toprated'>Top Rated</a>
                <a href='/upcoming'>Upcoming Movies</a>
            </div>
            <div className='SocialMedia'>
                <a href='/'>Facebook</a>
                <a href='/movies'>Instgram</a>
                <a href='/toprated'>Twitter</a>
            </div>
        </div>
    )
}

export default Footer;