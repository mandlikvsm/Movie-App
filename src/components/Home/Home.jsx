import React, { useEffect, useState } from 'react';
import Row from '../Row/Row';
import {getUpcomingMovie,getPopularMovie,getNowPlayingMovie,getTopRatedMovies} from '../../actions/movie'
import './Home.scss'
import { useDispatch, useSelector } from 'react-redux';
import Banner from './Banner';



const Home = () => {

    const [upcomingMovies, setUpcomingMovies] = useState([])
    const [nowplayingMovies, setNowplaying] = useState([])
    const [popularMovies, setPopular] = useState([])
    const [topRatedMovies, setTopRated] = useState([])
    const {Upcomingmovie,Populargmovie, NowPlayinggmovie,Topratedmovie} = useSelector((state) => state.movie);


    const dispatch = useDispatch();

    // (() => {
    //     dispatch(getUpcomingMovie())
    //     setUpcomingMovies(Upcomingmovie);

    // })
    // ();


    useEffect( async() => {

      
     await dispatch(getUpcomingMovie());
        // dispatch(getPopularMovie());
        // dispatch(getNowPlayingMovie());
        // dispatch(getTopRatedMovies());
        
        setUpcomingMovies(Upcomingmovie);
        // setPopular(Populargmovie);
        // setNowplaying(NowPlayinggmovie);
    //     setTopRated(Topratedmovie);
},[]);
       
    // }, [dispatch,Upcomingmovie,Populargmovie,NowPlayinggmovie,Topratedmovie]);

          
    

    return (
        <section className='home'>

            <div>
                {/* <Banner arr={upcomingMovies} /> */}
            </div>

            <Row title={"Upcoming Movies"} arr={upcomingMovies} />
            {/* <Row title={"Popular on Netflix"} arr={popularMovies} /> */}
            {/* <Row title={"Now Playing"} arr={nowplayingMovies} /> */}
            {/* <Row title={"Top Rated"} arr={topRatedMovies} /> */}
           
           
        </section>
    )
}

export default Home