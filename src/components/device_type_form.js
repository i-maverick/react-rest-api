import React, {Component} from 'react'
// import Select from 'react-select'
import 'react-select/dist/react-select.css';

import DumpNameInput from "./dump_name_input";
import DeviceTypeSelect from './device_type_select'
import RequestTypeSelect from './request_type_select'
import MessageTypeSelect from './message_type_select'

class DeviceTypeForm extends Component {
    constructor() {
        super();
        this.state = {
            selectedDevice: 'ATM',
            selectedRequest: '',
            selectedMessage: '',
        };
    }

    handleDeviceChange = (selectedDevice) => {
        console.log('handleDeviceChange');
        this.setState({selectedDevice});
    };

    handleRequestChange = (selectedRequest) => {
        console.log('handleRequestChange');
        this.setState({selectedRequest});
    };

    handleMessageChange = (selectedMessage) => {
        console.log('handleMessageChange');
        this.setState({selectedMessage});
    };

    render() {
        const {
            selectedDevice,
            selectedRequest,
            selectedMessage
        } = this.state;

        return (
            <form className={"form"}>
                <div className={"row"}>
                    <div className={"col-md-12"}>
                        <DumpNameInput/>
                    </div>
                </div>
                <br/>
                <div className={"row"}>
                    <div className={"col-md-4"}>
                        <DeviceTypeSelect
                            value={selectedDevice}
                            onDeviceChange={this.handleDeviceChange}
                        />
                    </div>
                    <div className={"col-md-4"}>
                        <RequestTypeSelect
                            value={selectedRequest}
                            device={this.state.selectedDevice}
                            onRequestChange={this.handleRequestChange}
                        />
                    </div>
                    <div className={"col-md-4"}>
                        <MessageTypeSelect
                            value={selectedMessage}
                            device={this.state.selectedDevice}
                            request={this.state.selectedRequest}
                            onMessageChange={this.handleMessageChange}
                        />
                    </div>
                </div>
            </form>
        )
    }
}

export default DeviceTypeForm
