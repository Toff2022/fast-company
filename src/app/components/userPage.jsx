import React from "react";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import api from "../api";
import Qualitie from "./qualitie";
import QualitiesList from "./qualitieslist";

const UserPage = () => {

    const params = useParams()
    const userId = params.userId
    // console.log('userId',userId)
    // console.log('sliceUserId', userId.slice(1))
    const [user, setUser] = useState()
    useEffect(() => {
        api.users.getById(userId.slice(1)).then((user) => setUser(user))
    }, [])
console.log('user', user)

    const handleChangeSelectedUser = () => {
        console.log('pushButton')
    }
    return (
        <>
            {user && (
                <div>
                    <h1>Имя: {user.name}</h1>
                    <h2>Профессия:{user.profession.name}</h2>
                    <h3> {<QualitiesList qualities={user.qualities}/>}</h3>
                    <h5>CompletedMeetings: {user.completedMeetings}</h5>
                    <h2>Rate: {user.rate}</h2>
                </div>
                    )}
                    <div>
                        <button 
                        className="btn btn-secondary mt-2"
                        onClick={handleChangeSelectedUser}>
                            Все пользователи
                        </button>
                    </div>
                
        </>
    )
    // return "Loading...";
};

export default UserPage;
