import React, { useEffect, useState } from 'react';
import './style/moviesec.css';
function Moviesec() {

    const [upcomingm, setupcomingm] = useState([]);

    useEffect(() => {
        async function getupcomingapi() {
            const data = await fetch('/api/');
            const record = await data.json();
            console.log(record);
            setupcomingm(record);
        }
        getupcomingapi();
    }, [])

    return (
        <div className='MainBody'>
            <div className='heading'>
                <h1>Latest Movies</h1>
            </div>
            {Object.keys(upcomingm).map(item => (
                <div className='upcoming' key={item}>
                    <div className='section'>
                        <h4>{upcomingm[item].name}</h4>
                        <img></img>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Moviesec