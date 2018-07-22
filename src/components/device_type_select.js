import React, {Component} from "react";

const device_types = ['ATM', 'MC', 'VISA'];

class DeviceTypeSelect extends Component {
    constructor() {
        super();
        this.state = {
            options: []
        };
    }

    componentWillMount() {
        const options = device_types.map((device, index) =>
            <option key={index} value={device}>{device}</option>
        );
        this.setState({options});
    }

    handleDeviceChange = (e) => {
        this.props.onDeviceChange(e.target.value);
    };

    render() {
        return <select className={"form-control"}
                       onChange={this.handleDeviceChange}>
            {this.state.options}</select>
    }
}

export default DeviceTypeSelect
