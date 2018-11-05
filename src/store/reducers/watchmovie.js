import * as actionTypes from "../actions/actionTypes";

const initialState = {
  movies: ["Death Note", "Castlevenia", "Black Panther"],
  filteredMovies: ["Death Note", "Castlevenia", "Black Panther"]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.WATCH_MOVIE:
      return {
        ...state,
        movies: state.movies,
        filteredMovies: state.movies
      };
    case actionTypes.FILTER_WATCHED:
      return {
        ...state,
        filteredMovies: state.movies.filter(movie => {
          return `${movie}`
            .toLowerCase()
            .includes(action.payload.toLowerCase());
        })
      };
    case actionTypes.ADD_WATCHEDMOVIE:
      return {
        ...state,
        movies: state.movies.concat(action.payload),
        filteredMovies: state.movies.concat(action.payload)
      };
    case actionTypes.DELETE_WATCHEDMOVIE:
      return {
        ...state,
        movies: state.movies.filter(name => name !== action.payload),
        filteredMovies: state.movies.filter(name => name !== action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
