import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/layout/navBar";
import Main from "./components/layout/main";
import Login from "./components/layout/login";
import Users from "./components/users";
import UserPage from "./components/userPage";

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/users/:userId" component={UserPage} />
                <Route path="/users" component={Users} />
                <Redirect to="/404" />
                {/* <Users /> */}
            </Switch>
        </>
    );
}

export default App;
