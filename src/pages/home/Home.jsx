import React from 'react'
import "./style.scss"
import HeroBanner from './HeroBanner/HeroBanner'
import Trending from './trending/Trending'
import Popular from './popular/Popular'
import Toprated from './topRated/Toprated'
const Home = () => {
  return (
    <div className='homePage'>
        <HeroBanner/>
        <Trending/>
        <Popular/>
        <Toprated/>
        
    </div>
  )
}

export default Home