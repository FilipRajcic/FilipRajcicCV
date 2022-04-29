import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";
import { connect } from "react-redux";
import { selectScreen } from "../actions";
import { AiOutlineClose } from "react-icons/ai";

class Modal extends Component {
  myRef = React.createRef();
  closeModal = () => {
    this.props.selectScreen(null);
    this.myRef.current.classList.add("hidden");
  };
  render() {
    return ReactDOM.createPortal(
      <div
        ref={this.myRef}
        className="modal__background"
        onClick={() => {
          this.closeModal();
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={`modal modal--${this.props.selectedScreen.title.toLowerCase()}`}
        >
          <div className="modal__close" onClick={this.closeModal}>
            <AiOutlineClose className="madal__close--icon" />
          </div>
          <h2 className="modal__header">{this.props.selectedScreen.title}</h2>
          <div className="modal__content">
            {this.props.selectedScreen.content}
          </div>
        </div>
      </div>,
      document.querySelector("#modal")
    );
  }
}
const mapPropsToState = (state) => {
  return { selectedScreen: state.selectedScreen };
};
export default connect(mapPropsToState, { selectScreen })(Modal);
