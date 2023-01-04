import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import api from "../../../api";
import QualitiesList from "../../ui/qualities/qualitieslist";

const UserPage = ({ userId }) => {
    const history = useHistory();
    // const params = useParams();
    // const userId = params.userId;
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(userId.slice(1)).then((data) => setUser(data));
    }, []);
    // console.log("user_data", user);
    const handleClick = () => {
        history.push(history.location.pathname + "/edit");
    };
    // console.log("userByuserPage", user)
    // console.log("userIdByuserPage", userId)
    if (user) {
        return (
            < div >
                <h1>Имя: {user.name}</h1>
                <h2>Профессия:{user.profession.name}</h2>
                <h3> {<QualitiesList qualities={user.qualities} />}</h3>
                <h5>CompletedMeetings: {user.completedMeetings}</h5>
                <h2>Rate: {user.rate}</h2>
                <button
                    className="btn btn-secondary mt-2"
                    onClick={handleClick}
                >
                    Изменить
                </button>
            </div>
        );
    } else {
        return <h1>Loading...</h1>;
    };
};
UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};
export default UserPage;
