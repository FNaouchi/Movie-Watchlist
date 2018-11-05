import React from "react";
import "./App.css";
import MovieRow from "./MovieRow";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";

const WatchedList = props => {
  const movieRows = props.filteredWatchedMovies.map(movie => (
    <MovieRow key={movie} movie={movie} watched />
  ));
  let length = props.watchedMovies.length;
  let currentLength = props.filteredWatchedMovies.length;
  let text = length;
  if (length !== currentLength) {
    text = `${currentLength} out of ${length}`;
  }
  return (
    <table className="mt-3 table">
      <thead>
        <tr>
          <th>Watched: {text} </th>
          <SearchBar watched />
        </tr>
      </thead>
      <tbody>{movieRows}</tbody>
    </table>
  );
};

const mapMapToProps = state => {
  return {
    watchedMovies: state.rootWatchMovie.movies,
    filteredWatchedMovies: state.rootWatchMovie.filteredMovies
  };
};
export default connect(
  mapMapToProps,
  null
)(WatchedList);
