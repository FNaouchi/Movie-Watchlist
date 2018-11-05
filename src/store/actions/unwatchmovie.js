import * as actionTypes from "./actionTypes";

export const unwatchList = () => {
  return {
    type: actionTypes.UNWATCH_MOVIE
  };
};

export const filterUnwatched = query => {
  return {
    type: actionTypes.FILTER_UNWATCHED,
    payload: query
  };
};

export const addMovie = moviename => {
  return {
    type: actionTypes.ADD_UNWATCHEDMOVIE,
    payload: moviename
  };
};

export const deleteMovie = moviename => {
  return {
    type: actionTypes.DELETE_UNWATCHEDMOVIE,
    payload: moviename
  };
};
