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
            pageNumber: 1,
            rating: "all"
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

    changeRating = (e) => {
        this.setState({
            pageNumber: 1,
            rating: e.target.value === "all" ? "all" : parseInt(e.target.value)
        })
    }

    render() {
        let data = [{
            sno: 1,
            name: "P.K",
            genre: "Comedy",
            rating: 4
        },
        {
            sno: 2,
            name: "Sholay",
            genre: "Drama",
            rating: 5
        },

        {
            sno: 3,
            name: "Anand",
            genre: "Comedy",
            rating: 3
        },
        {
            sno: 4,
            name: "Harry potter",
            genre: "Fictional",
            rating: 2
        },
        {
            sno: 5,
            name: "Hungama",
            genre: "Comedy",
            rating: 4
        },
        {
            sno: 6,
            name: "Jokar",
            genre: "Emotional",
            rating: 5
        },
        {
            sno: 7,
            name: "Tanhaji",
            genre: "Action",
            rating: 3
        },
        {
            sno: 8,
            name: "Aaj kal",
            genre: "Romantic",
            rating: 0
        },
        {
            sno: 9,
            name: "Golmaal",
            genre: "Comedy",
            rating: 4
        },
        {
            sno: 10,
            name: "Angrezi medium",
            genre: "Comedy",
            rating: 1
        },
        {
            sno: 11,
            name: "Race 3",
            genre: "Against Physics",
            rating: 5
        },
        {
            sno: 12,
            name: "ABCD",
            genre: "Dance",
            rating: 2
        },
        {
            sno: 13,
            name: "Happy new year",
            genre: "Dance",
            rating: 3
        },
        {
            sno: 14,
            name: "Kaal",
            genre: "Fictional",
            rating: 4
        },
        {
            sno: 15,
            name: "DDLJ",
            genre: "Romantic",
            rating: 1
        },
        {
            sno: 16,
            name: "Article 15",
            genre: "Crime drama",
            rating: 0
        },
        {
            sno: 17,
            name: "Special 26",
            genre: "Action",
            rating: 2
        },
        {
            sno: 18,
            name: "Padman",
            genre: "Drama",
            rating: 4
        },
        {
            sno: 19,
            name: "Baby",
            genre: "Funny",
            rating: 3
        },
        {
            sno: 20,
            name: "Badla",
            genre: "Drama crime",
            rating: 5
        }
        ];

        let filteredData = data.filter((movie) => {
            if(this.state.rating !== "all") {
                return movie.rating === this.state.rating;
            }
            return true;
        })
        filteredData = filteredData.filter((movie) => {
            let movieName = movie.name.toLowerCase();
            let search = this.state.search.toLowerCase();
            return movieName.includes(search);
        });

        let finalData = [];

        for (let i = (this.state.pageNumber - 1) * 5; i < (this.state.pageNumber * 5) && i < filteredData.length; i++) {
            finalData.push(filteredData[i]);
        }

        return (
            <div className="main-container">
                <NavBar />
                <SideBar />
                <div className="movie-table-container">
                    <div className="filters">
                        <input value={this.state.search} placeholder="Search for movies" className="movie-search" type="text" onChange={this.changeSearch} />
                        <select className="rating-dropdown" name="rating" onChange={this.changeRating}>
                            <option value={"all"} selected>All Rating</option>
                            <option value={0}>0 Rating</option>
                            <option value={1}>1 Rating</option>
                            <option value={2}>2 Rating</option>
                            <option value={3}>3 Rating</option>
                            <option value={4}>4 Rating</option>
                            <option value={5}>5 Rating</option>
                        </select>
                    </div>

                    <MoviesTable data={finalData} />
                    <Pagination totalMovies={filteredData.length} changePage={this.changePage} />
                </div>
            </div>
        )
    }
}

export default MoviesList;