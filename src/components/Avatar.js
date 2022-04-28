import React, { Component } from "react";
import "./Avatar.css";
class Avatar extends Component {
  avatar = require("../images/Avatar.png");
  state = { hover: false };
  render() {
    return (
      <div
        className="avatar"
        onMouseEnter={() => {
          this.setState({ hover: true });
        }}
        onMouseLeave={() => {
          this.setState({ hover: false });
        }}
      >
        <img src={this.avatar} alt="Avatar" className="avatar__image" />
        <div className={`avatar__cover  ${this.state.hover ? "" : "hidden"}`}>
          <h3>Filip Rajčić</h3>
          <h4>Junior Front-end Developer</h4>
        </div>
      </div>
    );
  }
}

export default Avatar;
