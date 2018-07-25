import React, { Component } from "react";

import * as Devices from "./data/devices";

class DeviceTypeSelect extends Component {
  constructor() {
    super();
    this.state = {
      options: []
    };
  }

  componentWillMount() {
    const options = Object.keys(Devices.device_types).map((key, index) => (
      <option key={index} value={key}>
        {key}
      </option>
    ));
    this.setState({ options });
  }

  handleDeviceChange = e => {
    this.props.onDeviceChange(e.target.value);
  };

  render() {
    return (
      <select className={"form-control"} onChange={this.handleDeviceChange}>
        {this.state.options}
      </select>
    );
  }
}

export default DeviceTypeSelect;
