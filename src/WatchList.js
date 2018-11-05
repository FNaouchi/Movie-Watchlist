import React from "react";
import "./App.css";
import MovieRow from "./MovieRow";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
const WatchList = props => {
  const movieRows = props.filteredUnwatchedMovies.map(movie => (
    <MovieRow key={movie} movie={movie} watched={false} />
  ));
  let length = props.watchedMovies.length;
  return (
    <table className="mt-3 table">
      <thead>
        <tr>
          <th>Watchlist: {length}</th>
          <SearchBar watched={false} />
        </tr>
      </thead>
      <tbody>{movieRows}</tbody>
    </table>
  );
};

const mapMapToProps = state => {
  return {
    watchedMovies: state.rootUnwatchMovie.movies,
    filteredUnwatchedMovies: state.rootUnwatchMovie.filteredMovies
  };
};

export default connect(
  mapMapToProps,
  null
)(WatchList);
