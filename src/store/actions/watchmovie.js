import * as actionTypes from "./actionTypes";

export const watchList = () => {
  return {
    type: actionTypes.WATCH_MOVIE
  };
};

export const filterWatched = query => {
  return {
    type: actionTypes.FILTER_WATCHED,
    payload: query
  };
};
export const addMovie = moviename => {
  return {
    type: actionTypes.ADD_WATCHEDMOVIE,
    payload: moviename
  };
};
export const deleteMovie = moviename => {
  return {
    type: actionTypes.DELETE_WATCHEDMOVIE,
    payload: moviename
  };
};
