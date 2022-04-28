import React, { Component } from "react";
import Avatar from "./Avatar";
import "./App.css";
import BubbleList from "./BubbleList";
import Modal from "./Modal";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Avatar />
        <BubbleList />
        {this.props.selectedScreen !== null ? <Modal /> : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { selectedScreen: state.selectedScreen };
};
export default connect(mapStateToProps)(App);
