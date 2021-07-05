import React from 'react';
import MoviesTableRow from '../moviesTableRow/moviesTableRow';
import "./moviesTable.css";

class MoviesTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let data = {
            sno: 1,
            name: "P.K",
            genre: "Comedy",
            rating: "Very Good"
        }
        return (
            <div className="movies-table">
                <MoviesTableRow data={data} />
                <MoviesTableRow data={data} />
                <MoviesTableRow data={data} />
                <MoviesTableRow data={data} />
            </div>
        )
    }
}

export default MoviesTable;