import { useState, useEffect } from 'react'
import { fetchDataFromApi } from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from "./store/homeSlice"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header, Footer } from './components/component'
import { Home, Details, SearchResult, Explore, PageNotFound } from './pages/pages'
function App() {
  const dispatch = useDispatch()
  const { url } = useSelector((state) => state?.home) //this give me access to reducer in store.js

  useEffect(() => {
    fetchApiConfig()
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
