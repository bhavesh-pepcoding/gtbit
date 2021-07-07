import React from 'react';
import MoviesTable from '../../components/moviesTable/moviesTable';
import NavBar from '../../components/navBar/navBar';
import Pagination from '../../components/pagination/pagination';
import SideBar from '../../components/sideBar/sideBar';
import "./moviesList.css";

class MoviesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            pageNumber: 1
        };
    }

    changeSearch = (e) => {
        this.setState({
            pageNumber: 1,
            search: e.target.value
        });
    }

    changePage = (pageNumber) => {
        this.setState({
            pageNumber: pageNumber
        });
    }

    render() {
        let data = [{
            sno: 1,
            name: "P.K",
            genre: "Comedy",
            rating: "Very good"
        }, 
        {
            sno: 2,
            name: "Sholay",
            genre: "Drama",
            rating: "Excellent"
        },

        {
            sno: 3,
            name: "Anand",
            genre: "Comedy",
            rating: "Superb"
        },
        {
            sno: 4,
            name: "Harry potter",
            genre: "Fictional",
            rating: "Awesome"
        },
        {
            sno: 5,
            name: "Hungama",
            genre: "Comedy",
            rating: "Awesome"
        },
        {
            sno: 6,
            name: "Jokar",
            genre: "Emotional",
            rating: "Awesome"
        },
        {
            sno: 7,
            name: "Tanhaji",
            genre: "Action",
            rating: "Awesome"
        },
        {
            sno: 8,
            name: "Aaj kal",
            genre: "Romantic",
            rating: "Awesome"
        },
        {
            sno: 9,
            name: "Golmaal",
            genre: "Comedy",
            rating: "Awesome"
        },
        {
            sno: 10,
            name: "Angrezi medium",
            genre: "Comedy",
            rating: "Awesome"
        },
        {
            sno: 11,
            name: "Race 3",
            genre: "Against Physics",
            rating: "Awesome"
        },
        {
            sno: 12,
            name: "ABCD",
            genre: "Dance",
            rating: "Awesome"
        },
        {
            sno: 13,
            name: "Happy new year",
            genre: "Dance",
            rating: "Awesome"
        },
        {
            sno: 14,
            name: "Kaal",
            genre: "Fictional",
            rating: "Awesome"
        },
        {
            sno: 15,
            name: "DDLJ",
            genre: "Romantic",
            rating: "Awesome"
        },
        {
            sno: 16,
            name: "Article 15",
            genre: "Crime drama",
            rating: "Awesome"
        },
        {
            sno: 17,
            name: "Special 26",
            genre: "Action",
            rating: "Awesome"
        },
        {
            sno: 18,
            name: "Padman",
            genre: "Drama",
            rating: "Awesome"
        },
        {
            sno: 19,
            name: "Baby",
            genre: "Funny",
            rating: "Awesome"
        },
        {
            sno: 20,
            name: "Badla",
            genre: "Drama crime",
            rating: "Awesome"
        }
        ];
        let filteredData = data.filter((movie) => {
            let movieName = movie.name.toLowerCase();
            let search = this.state.search.toLowerCase();
            return movieName.includes(search);
        });

        let finalData = [];

        for(let i = (this.state.pageNumber - 1) * 5; i < (this.state.pageNumber * 5) && i < filteredData.length; i++) {
            finalData.push(filteredData[i]);
        }

        return (
            <div className="main-container">
                <NavBar />
                <SideBar />
                <div className="movie-table-container">
                    <input value={this.state.search} placeholder="Search for movies" className="movie-search" type="text" onChange={this.changeSearch} />
                    <MoviesTable data={finalData} />
                    <Pagination totalMovies={filteredData.length} changePage={this.changePage} />
                </div>
            </div>
        )
    }
}

export default MoviesList;