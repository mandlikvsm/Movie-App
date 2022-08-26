import React from 'react';
import Row from '../Row/Row';
import { useSelector } from 'react-redux';
import Banner from '../Banner/Banner';
import './Home.scss'

const Home = () => {

    const { Upcomingmovie, Populargmovie, NowPlayinggmovie, Topratedmovie } = useSelector((state) => state.movie);

    return (
        <section className='home'>

            <div>
                <Banner arr={Upcomingmovie} />
            </div>

            <Row title={"Popular on Netflix"} arr={Populargmovie} />
            <Row title={"Now Playing"} arr={NowPlayinggmovie} />
            <Row title={"Top Rated"} arr={Topratedmovie} />
            <Row title={"Upcoming Movies"} arr={Upcomingmovie} />

        </section>
    );

}

export default Home