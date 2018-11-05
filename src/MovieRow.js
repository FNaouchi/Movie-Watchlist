import React from "react";
import { connect } from "react-redux";
import * as actionListCreators from "./store/actions/unwatchmovie";
import * as actionMovieCreators from "./store/actions/watchmovie";

const MovieRow = props => {
  const movie = props.movie;
  let type;
  if (props.watched) {
    type = "Unwatched";
  } else {
    type = "Watched";
  }
  return (
    <tr>
      <td>
        <div key={movie}>{movie}</div>
      </td>
      <td>
        <button
          className="btn"
          onClick={() => {
            console.log(movie);
            if (type === "Unwatched") {
              props.addWatchedMovies(movie);
              props.onDeleteUnwatchedMovie(movie);
            } else {
              props.addUnwatchedMovies(movie);
              props.onDeleteWatchedMovie(movie);
            }
          }}
          style={{ backgroundColor: "green" }}
        >
          {type}
        </button>
        <button
          className="btn"
          onClick={() =>
            type === "Unwatched"
              ? props.onDeleteUnwatchedMovie(movie)
              : props.onDeleteWatchedMovie(movie)
          }
          style={{ backgroundColor: "red" }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteUnwatchedMovie: name =>
      dispatch(actionMovieCreators.deleteMovie(name)),
    onDeleteWatchedMovie: name =>
      dispatch(actionListCreators.deleteMovie(name)),
    addUnwatchedMovies: name => dispatch(actionMovieCreators.addMovie(name)),
    addWatchedMovies: name => dispatch(actionListCreators.addMovie(name))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MovieRow);
