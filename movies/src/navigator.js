import { Component } from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import SideBar from "./components/sideBar/sideBar";
import MoviesList from "./containers/moviesList/moviesList";

class Navigator extends Component {
    render() {
        return(
            <BrowserRouter>
            <Switch>
                <Route path="/" component={MoviesList}></Route>
            </Switch>
            </BrowserRouter>
        );
    }
}

export default Navigator;