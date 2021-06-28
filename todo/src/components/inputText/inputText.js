import React from 'react';
import "./inputText.css";

class InputText extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            value: ""
        };
    }

    updateVal = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    submitList = (e) => {
        if(e.key === "Enter") {
            this.props.addList(this.state.value);
            this.setState({
                value: ""
            })
        }
    }

    render() {
        return(
            <input value={this.state.value} type="text" placeholder="Type what you want to do?" onKeyPress={this.submitList} onChange={this.updateVal} />
        );
    }
}

export default InputText;