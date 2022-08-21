
import { configureStore } from '@reduxjs/toolkit';
import { movieReducer } from '../reducers/movie';

const store = configureStore({
    reducer: {
        movie: movieReducer,
        // login: loginReducer,
      
       
       
    },

});

export default store;