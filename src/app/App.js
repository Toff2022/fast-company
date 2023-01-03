import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/ui/navBar";
import Main from "./layout/main";
import Login from "./layout/login";
import Users from "./layout/users";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/users/:userId?" component={Users} />
                <Route path="/login/:type?" component={Login} />
                <Route path="/" exact component={Main} />
                {/* <Route path="/users" component={Users} /> */}
                <Redirect to="/" />
            </Switch>
        </div>
    );
};

export default App;
