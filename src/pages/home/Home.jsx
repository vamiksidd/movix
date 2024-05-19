import React from 'react'
import './style.scss'
import { Trending, HeroBanner } from '../pages'


function Home() {
    return (
        <div className='homePage'>
            <HeroBanner />
            <Trending />
            <div style={{ height: '500px' }}></div>
        </div>
    )
}

export default Home