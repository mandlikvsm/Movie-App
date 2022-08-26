import React from 'react'
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import Home from '../Home/Home';

const imgUrl = "https://image.tmdb.org/t/p/original/"


const Search = () => {

  const { Upcomingmovie, Populargmovie, NowPlayinggmovie, Topratedmovie, searchInp } = useSelector((state) => state.movie);

  if (Upcomingmovie) {

    const searchData = [...Upcomingmovie, ...Populargmovie, ...NowPlayinggmovie, ...Topratedmovie];
 // eslint-disable-next-line
    var searchAPI = searchData.filter((val) => {
      if (searchInp === '') {
        return val
      } else if (val.title.toLowerCase().includes(searchInp.toLowerCase())) {
        return val
      }
    }).map((item, index) => <Card key={index} img={`${imgUrl}/${item.poster_path}`} arr />)
  }

  return (
    <>
      {searchInp ? <h1>{searchAPI}</h1> : <Home />}
    </>

  )
}

export default Search