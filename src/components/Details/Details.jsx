import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './details.css';

const Details = () => {
    const imgUrl = "https://image.tmdb.org/t/p/original/"

    var id = useParams();
    const { Upcomingmovie, Populargmovie, NowPlayinggmovie, Topratedmovie } = useSelector((state) => state.movie);
    const searchData = [...Upcomingmovie, ...Populargmovie, ...NowPlayinggmovie, ...Topratedmovie];

 // eslint-disable-next-line
    var searchAPI = searchData.filter((val) => {
 // eslint-disable-next-line
        if (val.id == id.id) {
            return val
        }
    }).map((item, index) =>
        <div key={index} className='about'>
            <div className='aboutContainer'>
                <img className='backdropImg' src={`${imgUrl}/${item.backdrop_path}`} alt='movies poster' />

            </div>
            <div className='aboutContainer2' >
                <h1>{item.title}</h1>
                <p>{item.overview}</p>
                <p>Release Date :- {item.release_date}</p>
                <p>Popularity : - {item.popularity}</p>
                <p>Average Vote : - {item.vote_average}</p>
                <p>Vote Count : - {item.vote_count}</p>
                <p>Vote Item : - {item.id}</p>

            </div>
        </div>

    )



    return <> {searchAPI}</>;
}

export default Details