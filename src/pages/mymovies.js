import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function Mymovies() {

    const [mymovie, setMymovie] = useState([]);

    useEffect(() => {
        async function getMymovies() {
            const data = await fetch('/api/my-movies');
            const record = await data.json();
            console.log(record);
            setMymovie(record);
        }
        getMymovies();
    }, [])

    return (
        <div className='MainBody'>
            <Header />
            <div className='heading'>
                <h1>Latest Movies</h1>
            </div>
            {Object.keys(mymovie).map(item => (
                <div className='upcoming' key={item}>
                    <div className='section'>
                        <h4>{mymovie[item].name}</h4>
                        <img></img>
                    </div>
                </div>
            ))}
            <Footer />
        </div>
    )
}

export default Mymovies