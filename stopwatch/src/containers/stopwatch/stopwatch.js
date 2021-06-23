import React from 'react';
import Button from '../../components/button/button';

class StopWatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state = {
            count: 0,
            startDisabled: false,
            stopDisabled: true,
        };
        this.interval = undefined;
    }

    start = () => {
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000);
        this.setState({
            startDisabled: true,
            stopDisabled: false
        })
    }

    stop = () => {
        clearInterval(this.interval);
        this.setState({
            startDisabled: false,
            stopDisabled: true
        })
    }

    reset = () => {
        this.stop();
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <Button text="Start" disabled={this.state.startDisabled} clickHandler={this.start} />
                <Button text="Stop" disabled={this.state.stopDisabled} clickHandler={this.stop}/>
                <Button text="Reset" disabled={false} clickHandler={this.reset}/>
            </div>
        )
    }
}

export default StopWatch;