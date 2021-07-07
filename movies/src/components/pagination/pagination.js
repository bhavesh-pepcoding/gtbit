import React from 'react';
import "./pagination.css";

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let numerOfPages = Math.ceil(this.props.totalMovies / 5);
        let paginationButtons = [];
        for (let i = 0; i < numerOfPages; i++) {
            paginationButtons.push(<div className="pagination-button" onClick={() => {
                this.props.changePage(i + 1);
            }}>{i + 1}</div>);
        }
        return (
            <div className="pagination">
                {paginationButtons}
            </div>
        )
    }
}

export default Pagination;