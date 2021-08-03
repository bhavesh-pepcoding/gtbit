import { useState } from 'react';
import Button from '../../components/button/button';

let interval = undefined;

function StopWatch() {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    //     this.state = {
    //         count: 0,
    //         startDisabled: false,
    //         stopDisabled: true,
    //     };
    //     this.interval = undefined;
    // }
    const [count, setCount] = useState(0);
    const [startDisabled, setStartDisabled] = useState(false);
    const [stopDisabled, setStopDisabled] = useState(true);
    // const [inter, setInter] = useState(undefined);

    const start = () => {
        interval = setInterval(() => {
            setCount((count) => count + 1); // due to callback we are getting updated value of count every time
        }, 1000);
        setStartDisabled(true);
        setStopDisabled(false);
    }

    const stop = () => {
        clearInterval(interval);
        setStartDisabled(false);
        setStopDisabled(true);
    }

    const reset = () => {
        stop();
        setCount(0);
    }
    return (
        <div>
            <p>{count}</p>
            <button disabled={startDisabled} onClick={() => start(count)} >Start</button>
            <button disabled={stopDisabled} onClick={stop} >Stop</button>
            <button disabled={false} onClick={reset} >Reset</button>
        </div>
    )
}

export default StopWatch;