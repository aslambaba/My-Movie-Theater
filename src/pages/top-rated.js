import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function Toprated() {

    const [toprated, setToprated] = useState([]);

    useEffect(() => {
        async function getTopratedapi() {
            const data = await fetch('/api/top-rated');
            const record = await data.json();
            console.log(record);
            setToprated(record);
        }
        getTopratedapi();
    }, [])

    return (
        <div className='MainBody'>
            <Header />
            <div className='heading'>
                <h1>Latest Movies</h1>
            </div>
            {Object.keys(toprated).map(item => (
                <div className='upcoming' key={item}>
                    <div className='section'>
                        <h4>{toprated[item].name}</h4>
                        <img></img>
                    </div>
                </div>
            ))}
            <Footer />
        </div>
    )
}

export default Toprated