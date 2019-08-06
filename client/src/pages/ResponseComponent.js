import React, { Component } from "react";
import Header from "../components/Header";
import PrimaryBtn from "../components/PrimaryBtn";
import { withRouter } from "react-router-dom";

class ResponseComponent extends Component {
  state = {};

  handleBtnClick = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="app-content">
        <Header />
        <div className="app-container">
          <div className="send-content">
            <div className="sent-header">
              <div className="sent-img">
                <img src="/icons/paper-plane.png" alt="paper plane icon" />
              </div>
              <h1>File sent!</h1>
            </div>
            <div className="sent-content">
              <p>
                We have sent an email to the reciver with a download link. The
                link will expire in 1h.
              </p>
            </div>
            <PrimaryBtn
              content="Send Another File"
              onBtnClick={this.handleBtnClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ResponseComponent);
