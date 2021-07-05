import React from 'react';
import MoviesTable from '../../components/moviesTable/moviesTable';
import NavBar from '../../components/navBar/navBar';
import SideBar from '../../components/sideBar/sideBar';
import "./moviesList.css";

class MoviesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="main-container">
                <NavBar />
                <SideBar />
                <div className="movie-table-container">
                    <MoviesTable />
                </div>
            </div>
        )
    }
}

export default MoviesList;