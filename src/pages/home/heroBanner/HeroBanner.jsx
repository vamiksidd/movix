import React, { useState, useEffect } from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import { useSelector } from 'react-redux'
import { ContentWrapper, LazyLoading } from '../../../components/component'

function HeroBanner() {

  const [background, setBackground] = useState("")
  const [query, setQuery] = useState("")
  const navigate = useNavigate()
  const { data, loading } = useFetch("/movie/upcoming")
  const { url } = useSelector((state) => state?.home);
  // console.log(data)

  useEffect(() => {
    const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
    setBackground(bg)

    //{  const bg1 = data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
    // const bgUrl = `https://image.tmdb.org/t/p/original/${bg1}`}

  })

  const searchQueryHandler = (e) => {
    if ((e.key === 'Enter' || e.type === 'click') && query.length > 0) {
      navigate(`/search/${query}`)
    }
  }
  return (
    <div className='heroBanner'>
      {!loading && <div className="backdrop-img">
        <LazyLoading src={background} />
      </div>}

      <div className="opacity-layer">
        
      </div>

      <ContentWrapper>
        <div className="wrapper">
          <div className="heroBannerContent">
            <span className="title">Welcome</span>
            <span className="subTitle">Get News About Latest Movies , Tv Shows</span>

            <div className="searchInput">
              <input
                type="text"
                placeholder='Search for Movies and Shows.....'
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
              />
              <button onClick={searchQueryHandler}>Search</button>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default HeroBanner