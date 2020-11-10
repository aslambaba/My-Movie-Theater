import React from 'react';
import './style/moviesec.css';
import imgg from './images/endgame.jpg'
function Moviesec() {
    return (
        <div className='MainBody'>
            <div className='heading'>
                <h1>Latest Movies</h1>
            </div>
            <div className='upcoming'>
                <div className='section'>
                    <h4>Avenger - Endgame</h4>
                    <img src={imgg}></img>
                </div>
                <div className='section'>
                    <h4>Avenger - Endgame</h4>
                    <img src={imgg}></img>
                </div>
                <div className='section'>
                    <h4>Avenger - Endgame</h4>
                    <img src={imgg}></img>
                </div>
                <div className='section'>
                    <h4>Avenger - Endgame</h4>
                    <img src={imgg}></img>
                </div>
                <div className='section'>
                    <h4>Avenger - Endgame</h4>
                    <img src={imgg}></img>
                </div>
                <div className='section'>
                    <h4>Avenger - Endgame</h4>
                    <img src={imgg}></img>
                </div>
            </div>
        </div>
    )
}

export default Moviesec