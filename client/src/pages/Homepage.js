import React, { Component } from "react";
import Header from "../components/Header";
import AppForm from "../components/AppForm";
import axios from "axios";

class Homepage extends Component {
  state = {
    form: {
      to: "",
      from: "",
      message: "",
      files: []
    },
    errors: {}
  };

  handleFileChange = e => {
    const { files } = e.target;
    this.setState({ form: { ...this.state.form, files } });
  };

  handleFileChange2 = e => {
    const { files } = e.target;
    const newFiles = [...this.state.form.files, ...Object.values(files)];
    this.setState({ form: { ...this.state.form, files: newFiles } });
  };

  handleFileclick = idx => () => {
    const files = [...this.state.form.files];
    const newFiles = files.filter((_, i) => i !== idx);
    this.setState({ form: { ...this.state.form, files: newFiles } });
  };

  handleInputChange = async e => {
    const { name, value } = e.target;
    await this.setState({
      form: { ...this.state.form, [name]: value },
      errors: { ...this.state.errors, [`${name}Error`]: false }
    });
  };

  handleFormSubmit = async e => {
    e.preventDefault();
    const {
      form: { to, from, message, files }
    } = this.state;
    if (!(await this.isFormValid())) return;
    try {
      const url = "/api/v1/shares";
      const data = new FormData();
      Object.values(files).forEach(file => data.append("files", file));
      data.append("to", to);
      data.append("from", from);
      data.append("message", message);
      const res = await axios.post(url, data);
      if (res.data.success) {
        this.props.history.push("/response");
      }
    } catch (err) {
      console.log(err);
    }
  };

  isFormValid = async () => {
    const {
      form: { to, from, files }
    } = this.state;
    const errors = {};
    if (!to) errors.toError = true;
    if (!from) errors.fromError = true;
    if (!files.length) errors.filesError = true;
    await this.setState({ errors });
    return !Object.keys(errors).length;
  };

  render() {
    const {
      form,
      form: { files },
      errors
    } = this.state;
    return (
      <div className="app-content">
        <Header />
        <div className="app-container">
          <AppForm
            form={form}
            files={files}
            filesTab={files.length}
            onFileChange={this.handleFileChange}
            onFileChange2={this.handleFileChange2}
            onIconClick={this.handleFileclick}
            onInputChange={this.handleInputChange}
            onFormSubmit={this.handleFormSubmit}
            errors={errors}
          />
        </div>
      </div>
    );
  }
}

export default Homepage;
