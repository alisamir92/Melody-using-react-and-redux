import { createSlice } from '@reduxjs/toolkit'


export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    watchList: []
},
  
  reducers: {
    addMovie: (state, movie) => {
      
     state.watchList.push(movie.payload)
    // state.movies = [...state.movies, ...movie]
    },
    removeMovie: (state, movie) => {
        state.watchList.pop(movie.payload)
    }
  },
})


export const { addMovie, removeMovie } = movieSlice.actions

export default movieSlice.reducer