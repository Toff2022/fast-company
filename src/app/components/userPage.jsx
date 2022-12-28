import React from "react";
import {useParams} from "react-router-dom"

const UserPage = () => {

    const params = useParams()
    console.log('params', params )
    return <h1>User Page User Card</h1>;
};

export default UserPage;
