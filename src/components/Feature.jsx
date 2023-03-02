import React from 'react'
import '../styles/Feature.css'

function Feature() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
            <div class="card" style={{ width: '50%', maxWidth: '800px' }}>
                <img src="images/favicon.ico" class="card-img-top" alt="logowithoutbk" style={{ objectFit: 'contain', height: '200px' }} />
            </div>
        </div>
    )
}

export default Feature
