import React, { Component } from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";

import DumpNameInput from "./dump_name_input";

import * as Devices from "./data/devices";

class DeviceTypeForm extends Component {
  constructor() {
    super();

    this.state = {
      selectedDevice: "ATM",
      selectedRequest: "ATM Request",
      selectedMessage: "ATM Request Message 1"
    };
  }

  handleDeviceChange = selectedDevice => {
    this.setState({ selectedDevice: selectedDevice.value });
    const requests = Devices.deviceTypes[selectedDevice.value];
    if (requests) {
      const req = Object.keys(requests)[0];
      this.setState({ selectedRequest: req });
      const messages = requests[req];
      if (messages) {
        this.setState({ selectedMessage: messages[0] });
      }
    }
  };

  handleRequestChange = selectedRequest => {
    this.setState({ selectedRequest: selectedRequest.value });
    const requests = Devices.deviceTypes[this.state.selectedDevice];
    const messages = requests[selectedRequest.value];
    if (messages) {
      this.setState({ selectedMessage: messages[0] });
    }
  };

  handleMessageChange = selectedMessage => {
    this.setState({ selectedMessage: selectedMessage.value });
  };

  render() {
    const { selectedDevice, selectedRequest, selectedMessage } = this.state;

    const deviceOptions = Object.keys(Devices.deviceTypes).map(key => ({
      value: `${key}`,
      label: `${key}`
    }));

    let requestOptions = [];
    if (selectedDevice) {
      requestOptions = Object.keys(Devices.deviceTypes[selectedDevice]).map(
        key => ({
          value: `${key}`,
          label: `${key}`
        })
      );
    }

    let messageOptions = [];
    if (selectedMessage) {
      messageOptions = Devices.deviceTypes[selectedDevice][selectedRequest].map(
        key => ({
          value: `${key}`,
          label: `${key}`
        })
      );
    }

    return (
      <form className={"form"}>
        <div className={"row"}>
          <div className={"col-md-12"}>
            <DumpNameInput />
          </div>
        </div>
        <br />
        <div className={"row"}>
          <div className={"col-md-4"}>
            <Select
              options={deviceOptions}
              value={selectedDevice}
              onChange={this.handleDeviceChange}
            />
          </div>
          <div className={"col-md-4"}>
            <Select
              options={requestOptions}
              value={selectedRequest}
              onChange={this.handleRequestChange}
            />
          </div>
          <div className={"col-md-4"}>
            <Select
              options={messageOptions}
              value={selectedMessage}
              onChange={this.handleMessageChange}
            />
          </div>
        </div>
      </form>
    );
  }
}

export default DeviceTypeForm;
