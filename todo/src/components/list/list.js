import React from 'react';

class List  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <div className="list">
                {this.props.text}
            </div>
        );
    }
}

export default List;