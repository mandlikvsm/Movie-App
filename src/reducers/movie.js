import { createReducer } from "@reduxjs/toolkit";


const initialState = {
    loading: true
}
export const movieReducer = createReducer(initialState, {

    "GET_UPCOMING_MOVIE_REQUEST": (state) => {
        state.loading = true;

    },
    "GET_UPCOMING_MOVIE_SUCCESS": (state, action) => {
        state.loading = false;
        state.Upcomingmovie = action.payload;
    },
    "GET_UPCOMING_MOVIE_FAILURE": (state, action) => { 
        state.loading = false;
        state.error = action.payload;
    },

    "GET_POPULAR_MOVIE_REQUEST": (state) => {
        state.loading = true;

    },
    "GET_POPULAR_MOVIE_SUCCESS": (state, action) => {
        state.loading = false;
        state.Populargmovie = action.payload;
    },
    "GET_POPULAR_MOVIE_FAILURE": (state, action) => { 
        state.loading = false;
        state.error = action.payload;
    },


    
    "GET_NOWPLAYING_MOVIE_REQUEST": (state) => {
        state.loading = true;

    },
    "GET_NOWPLAYING_MOVIE_SUCCESS": (state, action) => {
        state.loading = false;
        state.NowPlayinggmovie = action.payload;
    },
    "GET_NOWPLAYING_MOVIE_FAILURE": (state, action) => { 
        state.loading = false;
        state.error = action.payload;
    },

     
    "GET_TOPRATED_MOVIE_REQUEST": (state) => {
        state.loading = true;

    },
    "GET_TOPRATED_MOVIE_SUCCESS": (state, action) => {
    state.loading = false;
        state.Topratedmovie = action.payload;
    },
    "GET_TOPRATED_MOVIE_FAILURE": (state, action) => { 
        state.loading = false;
        state.error = action.payload;
    },
    // "CLEAR_ERRORS": (state) => {

    //     state.error =null;
    // },

    
});

