import React, { Component } from "react";

import * as Devices from "./data/devices";

class RequestTypeSelect extends Component {
  handleRequestChange = e => {
    this.props.onRequestChange(e.target.value);
  };

  render() {
    const device_types = Devices.device_types[this.props.device];
    const options = Object.keys(device_types).map((request, index) => (
      <option key={index} value={request}>
        {request}
      </option>
    ));
    return (
      <select
        value={this.props.value}
        onChange={this.handleRequestChange}
        className={"form-control"}
      >
        {options}
      </select>
    );
  }
}

export default RequestTypeSelect;
