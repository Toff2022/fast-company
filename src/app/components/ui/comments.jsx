import { orderBy } from "lodash";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import CommentsList from "../common/comments";
import AddCommentForm from "../common/comments/AddCommentForm";

const Comments = () => {
    const { userId } = useParams();
    const [comments, setComments] = useState([]);
    useEffect(() => {
        api.comments
            .fetchCommentsForUser(userId)
            .then((data) => setComments(data));
    }, []);
    const handleSubmit = (data) => {
        api.comments
            .comments
            .add({ ...data, pageId: userId })
            .then((data) => setComments([...comments, data]));
    };
    const handleRemoveComment = (id) => {
        api.comments
            .comments.remove(id).then((id) => {
                setComments(comments.filter((x) => x._id !== id));
            });
    };
    const sortedComments = orderBy(comments, ["created_at"], ["desc"]);
    console.log("comments", comments);
    return (
        <>
            <div className="card mb-2">
                {" "}
                <div className="card-body ">
                    <AddCommentForm onSubmit={handleSubmit} />
                </div>
            </div>
            {sortedComments.length > 0 && (
                <div className="card mb-3">
                    <div className="card-body ">
                        <h2>Comments</h2>
                        <hr />
                        <CommentsList
                            comments={sortedComments}
                            onRemove={handleRemoveComment}
                        />
                    </div>
                </div>
            )};
        </>
    );
};

export default Comments;
