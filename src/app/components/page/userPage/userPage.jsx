import React from "react";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import api from "../../../api";
import QualitiesList from "../../ui/qualities/qualitieslist";

const UserPage = () => {
    const history = useHistory();
    const params = useParams();
    const userId = params.userId;
    // console.log('userId',userId)
    // console.log('sliceUserId', userId.slice(1))
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(userId.slice(1)).then((user) => setUser(user));
    }, []);
    console.log("user", user);

    const handleSelectOtherUser = () => {
        history.push("/users");
    };
    return (
        <>
            {user && (
                <div>
                    <h1>Имя: {user.name}</h1>
                    <h2>Профессия:{user.profession.name}</h2>
                    <h3> {<QualitiesList qualities={user.qualities} />}</h3>
                    <h5>CompletedMeetings: {user.completedMeetings}</h5>
                    <h2>Rate: {user.rate}</h2>
                </div>
            )}
            {!user && (
                <div>
                    {" "}
                    <h1>Loading...</h1>
                </div>
            )}

            <div>
                <button
                    className="btn btn-secondary mt-2"
                    onClick={() => {
                        handleSelectOtherUser();
                    }}
                >
                    Все пользователи
                </button>
            </div>
        </>
    );
};

export default UserPage;
