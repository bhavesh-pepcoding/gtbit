import React from 'react';
import "./loader.css";

class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="loader">
                <img src="https://flevix.com/wp-content/uploads/2019/07/Comp-2.gif" alt="loader" />
            </div>
        )
    }
}

export default Loader;