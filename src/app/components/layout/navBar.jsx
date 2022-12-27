import React from "react";
import { Link } from "react-router-dom";
import Main from "./main";
import Login from "./login";
import Users from "../users";

const NavBar = () => {
    return (
        <ul class="nav">
            <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                    Main
                </Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/login">
                    Login
                </Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="../users">
                    Users
                </Link>
            </li>
        </ul>
    );
};

export default NavBar;
