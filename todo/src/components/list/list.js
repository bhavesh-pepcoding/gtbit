import React from 'react';
import './list.css';
class List  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <div className="list" onDoubleClick={this.props.removeList}>
                {this.props.text}
            </div>
        );
    }
}

export default List;