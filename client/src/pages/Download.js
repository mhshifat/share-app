import React, { Component } from "react";
import Header from "../components/Header";
import PrimaryBtn from "../components/PrimaryBtn";
import axios from "axios";

class Download extends Component {
  state = {
    share: null
  };

  componentWillMount = async () => {
    try {
      const url = `/api/v1/shares/${this.props.match.params.id}`;
      const res = await axios.get(url);
      console.log("res", res);
      this.setState({ share: res.data.share });
    } catch (err) {
      console.log(err);
    }
  };

  handleSingleDownload = id => async () => {
    const url = `/api/v1/files/download/${id}`;
    await axios.get(url);
  };

  handleAllDownload = async () => {
    const { share } = this.state;
    const url = `/api/v1/shares/download/${share._id}`;
    await axios.get(url);
  };

  render() {
    const { share } = this.state;
    return (
      <div className="app-content">
        <Header />
        <div className="app-container">
          <div className="send-content">
            <div className="sent-header">
              <div className="sent-img">
                <img src="/icons/download.png" alt="download icon" />
              </div>
              <h1>Ready to download!</h1>
            </div>
            <div className="download-content">
              <ul className="download-files">
                {share &&
                  share.files.map(file => (
                    <li className="download-file" key={file._id}>
                      <span>
                        {file.originalname.length > 30
                          ? file.originalname.substring(0, 30) + "..."
                          : file.originalname}
                      </span>
                      <i
                        className="material-icons"
                        onClick={this.handleSingleDownload(file._id)}
                      >
                        cloud_download
                      </i>
                    </li>
                  ))}
              </ul>
            </div>
            <PrimaryBtn
              content="Download All"
              onBtnClick={this.handleAllDownload}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Download;
