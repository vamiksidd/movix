import React from 'react'
import './style.scss'
import HeroBanner from './heroBanner/HeroBanner'


function Home() {
    return (
        <div className='homePage'>
            <HeroBanner />
            <div style={{ height: '500px' }}></div>
        </div>
    )
}

export default Home