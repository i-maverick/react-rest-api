import React, {Component} from "react";

const message_types = {
    'ATM': ['ATM Request Message', 'ATM Response Message'],
    'MC': ['MC Request Message', 'MC Response Message'],
    'VISA': ['VISA Request Message', 'VISA Response Message'],
};

class MessageTypeSelect extends Component {
    handleMessageChange = (e) => {
        this.props.onMessageChange(e.target.value);
    };

    render() {
        console.log(this.props.request);
        let options = message_types[this.props.device].map((message, index) =>
            <option key={index} value={message}>{message}</option>
        );
        return <select value={this.props.value}
            onChange={this.handleMessageChange}
            className={"form-control"}>
            {options}</select>
    }
}

export default MessageTypeSelect
