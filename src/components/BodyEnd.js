import React from "react";
import ReactDOM from "react-dom";

export default class BodyEnd extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
    this.el.style.display = "contents";
  }

  componentDidMount() {
    document.body.appendChild(this.el);
    this.renders();
  }

  componentDidUpdate() {
    this.renders();
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  renders() {
    const { children } = this.props;
    ReactDOM.render(children, this.el);
  }

  render() {
    return null;
  }
}