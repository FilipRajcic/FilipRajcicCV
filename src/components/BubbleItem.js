import React, { Component } from "react";
import "./BubbleItem.css";
import { connect } from "react-redux";
import { selectScreen } from "../actions";

class BubbleItem extends Component {
  element = React.createRef();
  state = { hover: false };

  animationPause = () => {
    this.setState({ hover: true });
    this.element.current.parentElement.style.animationPlayState = `paused`;

    this.element.current.parentElement
      .querySelectorAll(".bubble__item")
      .forEach((e) => {
        e.style.animationPlayState = "paused";
      });
    this.element.current.parentElement
      .querySelectorAll(".bubble__item--container")
      .forEach((e) => {
        e.style.animationPlayState = "paused";
      });
  };
  animationResume = () => {
    this.setState({ hover: false });
    this.element.current.parentElement.style.animationPlayState = `running`;
    this.element.current.parentElement
      .querySelectorAll(".bubble__item")
      .forEach((e) => {
        e.style.animationPlayState = "running";
      });
    this.element.current.parentElement
      .querySelectorAll(".bubble__item--container")
      .forEach((e) => {
        e.style.animationPlayState = "running";
      });
  };
  getScreenNum = (myCssClass) => {
    const num = Number(myCssClass.slice(-1));
    return num - 1;
  };
  render() {
    // console.log(this.props.selectedScreen);
    return (
      <div
        ref={this.element}
        className={`bubble__item--container ${this.props.addClass} `}
        onClick={() => {
          // this.props.selectScreen(this.props.screens[1]);
          this.props.selectScreen(
            this.props.screens[this.getScreenNum(this.props.addClass)]
          );
          // console.log(this.props.screens);
        }}
        onMouseEnter={this.animationPause}
        onMouseLeave={this.animationResume}
      >
        <div className="bubble__item">
          {this.props.children}
          <div className="bubble__item--text">
            {this.state.hover ? this.props.title.toUpperCase() : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapPropsToState = (state) => {
  return { screens: state.screens, selectedScreen: state.selectedScreen };
};
export default connect(mapPropsToState, { selectScreen })(BubbleItem);
