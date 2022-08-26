import React, { useEffect } from 'react';
import { getUpcomingMovie, getPopularMovie, getNowPlayingMovie, getTopRatedMovies } from './actions/movie'
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import SignUp from './components/Register/SignUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Profile from './components/Profile/Profile';
import Details from './components/Details/Details';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const { search } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {

    (() => {

      dispatch(getPopularMovie());
      dispatch(getNowPlayingMovie());
      dispatch(getTopRatedMovies());
      dispatch(getUpcomingMovie());

    })();

  }, [dispatch]);

  return (

    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={search ? <Search /> : <Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;


