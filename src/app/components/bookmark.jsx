import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ status, ...rest }) => {
    // const getBookmarkClasses = (status) => {
    //     let bookmarkClasses = "";
    //     if (status === false) {
    //         return (bookmarkClasses += "bi bi-bookmark");
    //     } else {
    //         return (bookmarkClasses += "bi bi-bookmark-fill");
    //     }
    // };

    return (
        <button {...rest}>
            <i className={"bi bi-bookmark" + (status ? "-heart-fill" : "")}></i>
            {/* <i className={getBookmarkClasses(status)}></i> */}
        </button>
    );
};
Bookmark.propTypes = {
    status: PropTypes.bool.isRequired
};
export default Bookmark;
