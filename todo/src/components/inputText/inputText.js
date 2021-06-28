import React from 'react';
import "./inputText.css";

class InputText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }

    updateVal = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return(
            <input value={this.state.value} type="text" placeholder="Type what you want to do?" onKeyPress={() => {this.props.addList(this.state.value)}} onChange={this.updateVal} />
        );
    }
}

export default InputText;