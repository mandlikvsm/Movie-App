
import axios from 'axios';

const apiKey = "3140349f8363d436786f22fd435a1d92";
const url = "https://api.themoviedb.org/3";
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const Popular = "popular";
const topRated = "top_rated";


export const getUpcomingMovie = () => async(dispatch)=> {

    try {
        dispatch({
            type:"GET_UPCOMING_MOVIE_REQUEST",
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

export const getPopularMovie = () => async(dispatch)=> {

    try {
        dispatch({
            type:"GET_POPULAR_MOVIE_REQUEST",
        });

        const { data: { results } } = await axios.get(`${url}/movie/${Popular}?api_key=${apiKey}`)
        // const { data: { results } } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`)


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

export const getNowPlayingMovie = () => async(dispatch)=> {

    try {
        dispatch({
            type:"GET_NOWPLAYING_MOVIE_REQUEST",
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




export const getTopRatedMovies = () => async(dispatch)=> {

    try {
        dispatch({
            type:"GET_TOPRATED_MOVIE_REQUEST",
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










// const fetchUpcoming = async () => {
    // const { data: { results } } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`)
    // console.log(`${url}/movie/${upcoming}?api_key=${apiKey}`);
    // setUpcomingMovies(results)
// };

// const fetchnowPlaying = async () => {
//     const { data: { results } } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`)
//     setNowplaying(results)
// };

// const fetchPopular = async () => {
//     const { data: { results } } = await axios.get(`${url}/movie/${Popular}?api_key=${apiKey}`)
//     setPopular(results)
//     // setPosterPath(results)
//     // console.log(popularMovies.poster_path);


// };

// const fetchTopRated = async () => {
//     const { data: { results } } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`)
//     setTopRated(results)
// };

// const getAllGenre = async () => {
//     const { data: { genres } } = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`)
//     setGenre(genres)
//     // console.log(genres)
// };




// export const login = (email,password) => async(dispatch)=> {

//     try {
//         dispatch({
//             type:"LOGIN_REQUEST",
//         });

//         const { data } = await axios.post("/api/v1/login",{

//             email,
//             password,
//         }, {
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });
       

//         dispatch({
//             type: "LOGIN_SUCCESS",
//             payload: data.message,

            
//         });
//     } catch (error) {
        
        
//         dispatch({
//             type: "LOGIN_FAILURE",
//             payload: error.response.data.message,
            
            
//         });
//     }
// }


// export const logout = () => async(dispatch)=> {

//     try {
//         dispatch({
//             type:"LOGOUT_REQUEST",
//         });

//         const { data } = await axios.post("/api/v1/logout");
       

//         dispatch({
//             type: "LOGOUT_SUCCESS",
//             payload: data.message,

            
//         });
//     } catch (error) {
        
        
//         dispatch({
//             type: "LOGOUT_FAILURE",
//             payload: error.response.data.message,
            
            
//         });
//     }
// }

// export const loadUser = () => async(dispatch)=> {

//     try {
//         dispatch({
//             type:"LOAD_USER_REQUEST",
//         });

//         const { data } = await axios.get("/api/v1/me");
       

//         dispatch({
//             type: "LOAD_USER_SUCCESS",
//             payload: data.user,

            
//         });
//     } catch (error) {
        
        
//         dispatch({
//             type: "LOAD_USER_FAILURE",
//             payload: error.response.data.message,
            
            
//         });
//     }
// }

// export const updateUser = (name,email,password ,skills,about) => async(dispatch)=> {

//     try {
//         dispatch({
//             type:"UPDATE_USER_REQUEST",
//         });

//         const { data } = await axios.put("/api/v1/admin/update",{
//             name,
//             email,
//             password,
//             skills,
//             about,
//         }, {
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });
       

//         dispatch({
//             type: "UPDATE_USER_SUCCESS",
//             payload: data.message,

            
//         });
//     } catch (error) {
        
        
//         dispatch({
//             type: "UPDATE_USER_FAILURE",
//             payload: error.response.data.message,
            
            
//         });
//     }
// }


// export const addTimeline = (title, description, date) => async(dispatch)=> {

//     try {
//         dispatch({
//             type:"ADD_TIMELINE_REQUEST",
//         });

//         const { data } = await axios.post("/api/v1/admin/timeline/add",{
//             title,
//             description,
//             date,
            
//         }, {
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });
       

//         dispatch({
//             type: "ADD_TIMELINE_SUCCESS",
//             payload: data.message,

            
//         });
//     } catch (error) {
        
        
//         dispatch({
//             type: "ADD_TIMELINE_FAILURE",
//             payload: error.response.data.message,
            
            
//         });
//     }
// }


// export const deleteTimeline = (id) => async(dispatch)=> {

//     try {
//         dispatch({
//             type:"DELETE_TIMELINE_REQUEST",
//         });

//         const { data } = await axios.delete(`/api/v1/admin/timeline/${id}`);
       

//         dispatch({
//             type: "DELETE_TIMELINE_SUCCESS",
//             payload: data.message,

            
//         });
//     } catch (error) {
        
        
//         dispatch({
//             type: "DELETE_TIMELINE_FAILURE",
//             payload: error.response.data.message,
            
            
//         });
//     }
// }


// export const addYoutube = (title, url, image) => async(dispatch)=> {

//     try {
//         dispatch({
//             type:"ADD_YOUTUBE_REQUEST",
//         });

//         const { data } = await axios.post("/api/v1/admin/youtube/add",{
//             title,
//             url,
//             image,
            
//         }, {
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });
       

//         dispatch({
//             type: "ADD_YOUTUBE_SUCCESS",
//             payload: data.message,

            
//         });
//     } catch (error) {
        
        
//         dispatch({
//             type: "ADD_YOUTUBE_FAILURE",
//             payload: error.response.data.YOUTUBE
            
            
//         });
//     }
// }


// export const deleteYoutube = (id) => async(dispatch)=> {

//     try {
//         dispatch({
//             type:"DELETE_YOUTUBE_REQUEST",
//         });

//         const { data } = await axios.delete(`/api/v1/admin/youtube/${id}`);
       

//         dispatch({
//             type: "DELETE_YOUTUBE_SUCCESS",
//             payload: data.message,

            
//         });
//     } catch (error) {
        
        
//         dispatch({
//             type: "DELETE_YOUTUBE_FAILURE",
//             payload: error.response.data.message,
            
            
//         });
//     }
// }


// export const addProject = (title, url, image, description, techStack) => async(dispatch)=> {

//     try {
//         dispatch({
//             type:"ADD_PROJECT_REQUEST",
//         });

//         const { data } = await axios.post("/api/v1/admin/project/add",{
//             title,
//             url,
//             image,
//             description,
//             techStack,
            
//         }, {
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });
       

//         dispatch({
//             type: "ADD_PROJECT_SUCCESS",
//             payload: data.message,

            
//         });
//     } catch (error) {
        
        
//         dispatch({
//             type: "ADD_PROJECT_FAILURE",
//             payload: error.response.data.YOUTUBE
            
            
//         });
//     }
// }


// export const deleteProject = (id) => async(dispatch)=> {

//     try {
//         dispatch({
//             type:"DELETE_PROJECT_REQUEST",
//         });

//         const { data } = await axios.delete(`/api/v1/admin/project/${id}`);
//         console.log(data);
       

//         dispatch({
//             type: "DELETE_PROJECT_SUCCESS",
//             payload: data.message,

            
//         });
//     } catch (error) {
        
        
//         dispatch({
//             type: "DELETE_PROJECT_FAILURE",
//             payload: error.response.data.message,
            
            
//         });
//     }
// }


// export const contactUs = (name,email,message) => async(dispatch)=> {

//     try {
//         dispatch({
//             type:"CONTACT_US_REQUEST",
//         });

//         const { data } = await axios.post("/api/v1/contact",{
//             name,email,message
//         }, {
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });
       

//         dispatch({
//             type: "CONTACT_US_SUCCESS",
//             payload: data.message,

            
//         });
//     } catch (error) {
        
        
//         dispatch({
//             type: "CONTACT_US_FAILURE",
//             payload: error.response.data.YOUTUBE
            
            
//         });
//     }
// }
