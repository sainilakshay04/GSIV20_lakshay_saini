import axios from 'axios';
import apiKey from '../API_KEY'
export function fetchMovies() {
   return function (dispatch) {
       axios.get('https://api.themoviedb.org/3/discover/movie?api_key='+apiKey+'&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
       .then((response) => {
           dispatch({ type: "FETCH_MOVIES",
               payload: response.data.results
           })
       })
   }
}
