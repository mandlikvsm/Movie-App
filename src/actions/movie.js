import axios from 'axios';

const apiKey = "3140349f8363d436786f22fd435a1d92";
const url = "https://api.themoviedb.org/3";
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const Popular = "popular";
const topRated = "top_rated";


export const getUpcomingMovie = () => async (dispatch) => {

    try {
        dispatch({
            type: "GET_UPCOMING_MOVIE_REQUEST",
        });

        const { data: { results } } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`)

        dispatch({
            type: "GET_UPCOMING_MOVIE_SUCCESS",
            payload: results,
        });
    } catch (error) {
        dispatch({
            type: "GET_UPCOMING_MOVIE_FAILURE",
            // payload: error.response.results.message,
        });
    }
}


export const searchMovie = (searchInput) => async (dispatch) => {


    try {
        dispatch({
            type: "SEARCH_MOVIE_REQUEST",
        });

        dispatch({
            type: "SEARCH_MOVIE_SUCCESS",
            payload: searchInput,

        });
    } catch (error) {
        dispatch({
            type: "SEARCH_MOVIE_FAILURE",

        });
    }
}


export const getPopularMovie = () => async (dispatch) => {

    try {
        dispatch({
            type: "GET_POPULAR_MOVIE_REQUEST",
        });

        const { data: { results } } = await axios.get(`${url}/movie/${Popular}?api_key=${apiKey}`)

        dispatch({
            type: "GET_POPULAR_MOVIE_SUCCESS",
            payload: results,
        });
    } catch (error) {
        dispatch({
            type: "GET_POPULAR_MOVIE_FAILURE",
            // payload: error.response.results.message,
        });
    }
}

export const getNowPlayingMovie = () => async (dispatch) => {

    try {
        dispatch({
            type: "GET_NOWPLAYING_MOVIE_REQUEST",
        });


        const { data: { results } } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`)

        dispatch({
            type: "GET_NOWPLAYING_MOVIE_SUCCESS",
            payload: results,
        });
    } catch (error) {
        dispatch({
            type: "GET_NOWPLAYING_MOVIE_FAILURE",
            // payload: error.response.results.message,
        });
    }
}


export const getTopRatedMovies = () => async (dispatch) => {

    try {
        dispatch({
            type: "GET_TOPRATED_MOVIE_REQUEST",
        });

        const { data: { results } } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`)

        dispatch({
            type: "GET_TOPRATED_MOVIE_SUCCESS",
            payload: results,
        });
    } catch (error) {
        dispatch({
            type: "GET_TOPRATED_MOVIE_FAILURE",
            // payload: error.response.results.message,
        });
    }
}









