import React, { Component } from "react";
import "./App.css";
import WatchList from "./WatchList";
import WatchedList from "./WatchedList";
import { connect } from "react-redux";
import * as actionListCreators from "./store/actions/unwatchmovie";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ text: event.target.value });
  }
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-5 card mx-5">
            <WatchList />
          </div>
          <div className="col-5 card">
            <WatchedList />
          </div>
        </div>
        <input
          type="text"
          placeholder="Movie..."
          onChange={this.handleChange}
        />
        <button onClick={() => this.props.addMovies(this.state.text)}>
          ADD
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addMovies: query => dispatch(actionListCreators.addMovie(query))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
