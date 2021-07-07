import React from 'react';
import NavBarButtons from '../navBarButtons/navBarButtons';
import "./navBar.css";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="navbar">
                <img className="logo" src="https://i.pinimg.com/736x/54/51/75/54517514b7e9c8c21cb1526176c30732.jpg" alt="logo" />
                <NavBarButtons text="Home" />
                <NavBarButtons text="Movies" />
                <NavBarButtons text="About Us" />
            </div>
        )
    }
}

export default NavBar;