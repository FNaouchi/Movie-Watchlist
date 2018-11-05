import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import * as actionListCreators from "./store/actions/unwatchmovie";
import * as actionMovieCreators from "./store/actions/watchmovie";
import { connect } from "react-redux";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (this.props.watched) {
      this.props.filterWatchedMovies(event.target.value);
    } else {
      this.props.filterUnwatchedMovies(event.target.value);
    }
  }

  render() {
    return (
      <div className="form-group col-lg-6 col-12 mx-auto">
        <div className="input-group my-3">
          <input
            className="form-control"
            type="text"
            onChange={this.handleChange}
          />
          <div className="input-group-append">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filterUnwatchedMovies: query =>
      dispatch(actionListCreators.filterUnwatched(query)),
    filterWatchedMovies: query =>
      dispatch(actionMovieCreators.filterWatched(query))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
