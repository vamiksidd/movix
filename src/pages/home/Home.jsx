import React from 'react'
import './style.scss'
import { Trending, HeroBanner, Popular, TopRated } from '../pages'


function Home() {
    return (
        <div className='homePage'>
            <HeroBanner />
            <Trending />
            <Popular />
            <TopRated/>
            {/* <div style={{ height: '500px' }}></div> */}
        </div>
    )
}

export default Home