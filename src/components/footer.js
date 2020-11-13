import React from 'react';
import './style/footer.css';

function Footer() {
    return (
        <div className='Footer'>
            <table>
                <thead>
                    <tr>
                        <td><h3>My Movie Theater</h3></td>
                        <td><strong>Quick Links</strong></td>
                        <td><strong>Social Media</strong></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>Home</td>
                        <td>Facebook</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>My Movies</td>
                        <td>Instagram</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Top Rated</td>
                        <td>Twitter</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>UpComming</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            

        </div>
    )
}

export default Footer;