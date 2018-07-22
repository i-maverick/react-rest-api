import React, {Component} from 'react'

const request_types = {
    'ATM': ['ATM Request', 'ATM Response'],
    'MC': ['MC Request', 'MC Response'],
    'VISA': ['VISA Request', 'VISA Response'],
    'POS VISA2': ['POS VISA2 Request', 'POS VISA2 Response']
};

class RequestTypeSelect extends Component {
    handleRequestChange = (e) => {
        this.props.onRequestChange(e.target.value);
    };

    render() {
        const options = request_types[this.props.device].map((request, index) =>
            <option key={index} value={request}>{request}</option>
        );
        return <select value={this.props.value}
            onChange={this.handleRequestChange}
            className={"form-control"}>
            {options}</select>
    }
}

export default RequestTypeSelect
