import { useState, useEffect } from 'react'
import { fetchDataFromApi } from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration, getGenres } from "./store/homeSlice"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header, Footer } from './components/component'
import { Home, Details, SearchResult, Explore, PageNotFound } from './pages/pages'
function App() {
  const dispatch = useDispatch()
  const { url } = useSelector((state) => state?.home) //this give me access to reducer in store.js

  useEffect(() => {
    fetchApiConfig()
    genresCall()
  }, [])
  const fetchApiConfig = () => {
    fetchDataFromApi('/configuration').then((res) => {
      // console.log(res)
      const url = {
        backdrop: res?.images?.secure_base_url + "original",
        poster: res?.images?.secure_base_url + "original",
        profile: res?.images?.secure_base_url + "original",
      }


      dispatch(getApiConfiguration(url))//save this response to url in homeslice
    })
  }
  const genresCall = async () => {
    try {
      const endPoints = ["tv", "movie"];
      const promises = endPoints.map((url) => fetchDataFromApi(`/genre/${url}/list`));
      const data = await Promise.all(promises);
      const allGenres = {};

      data.forEach(({ genres }) => {
        genres.forEach((item) => {
          if (item && item.id) {
            allGenres[item.id] = item;
          }
        });
      });
      dispatch(getGenres(allGenres));
    } catch (err) {
      console.error("Error in genresCall", err);
    }
  };



  // console.log(url)

  // useEffect(() => {
  //   // fetchDataFromApi('/movie/popular').then((res) => {
  //   //   console.log(res)
  //   // })
  // }, [])
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:mediaType/:id' element={<Details />} />
        <Route path='/search/:query' element={<SearchResult />} />
        <Route path='/explore/:mediaType' element={<Explore />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
