import React from 'react';
import '../styles/Feature.css';

import Favicon from "../assets/images/favicon.ico";

function Feature() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
            <div className="card" style={{ width: '50%', maxWidth: '800px' }}>
                <img src={Favicon} className="card-img-top" alt="logowithoutbk" style={{ objectFit: 'contain', height: '200px' }} />
            </div>
        </div>
    )
}

export default Feature
