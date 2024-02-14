import React, { useEffect, useState } from "react";
import styles from "../styles/FoodInfo.module.css";

const Comments = ({ id, user }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [editableComment, setEditableComment] = useState({});

  // when editbale comment state change
  useEffect(() => {
    if (editableComment?._id) {
      setComment(editableComment?.content);
    }
  }, [editableComment]);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          // get all comments
          const commentResponse = await fetch(
            `https://howedible-backend.onrender.com/api/comments`
          );
          const commentsData = await commentResponse.json();
          // if recipe is there or return an empty array
          setComments(commentsData || []);
        } catch (e) {
          console.error(e);
        }
      };

      fetchData();
    }
  }, [id]);

  // add new comment and update comment
  const submitHanlder = (e) => {
    e.preventDefault();

    // to edit comment
    if (editableComment?._id) {
      const options = {
        // put request
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: comment, user_id: user?._id }),
      };

      fetch(
        `https://howedible-backend.onrender.com/api/comments/${editableComment?._id}`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          if (response?._id) {
            const updatedComments = comments?.map((item) => {
              if (item?._id === response?._id) {
                return {
                  ...response,
                  user_id: user,
                };
              } else {
                return item;
              }
            });

            setComments(updatedComments);
            setEditableComment({});
            setComment("");
          }
        })
        .catch((err) => console.error(err));
    } else {
      const options = {
        // post request
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: comment, user_id: user?._id }),
      };

      fetch("https://howedible-backend.onrender.com/api/comments", options)
        .then((response) => response.json())
        .then((response) => {
          if (response?._id) {
            setComments([
              ...comments,
              {
                ...response,
                user_id: user,
              },
            ]);
            setComment("");
          }
        })
        .catch((err) => console.error(err));
    }
  };

  // delete comment handler
  const deleteComment = (id) => {
    // to delete comment
    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    fetch(`https://howedible-backend.onrender.com/api/comments/${id}`, options)
      .then((response) => response.json())
      .then((response) => {
        if (response?._id) {
          const updatedComments = comments?.filter(
            (item) => item?._id !== response?._id
          );
          setComments(updatedComments);
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="comments">
      <h2>Comments</h2>

      {user?.email && (
        <div className={styles?.addComment}>
          <span>Add New Comment</span>
          <br />
          <br />
          <form onSubmit={submitHanlder}>
            <textarea
              onChange={(e) => setComment(e.target.value)}
              placeholder="Comment on this recipe...."
              required
              value={comment}
            />
            <br />
            <button>{editableComment?._id ? "Update" : "Submit"}</button>
          </form>
        </div>
      )}

      <br />
      <div>
        <span>All Comments</span>
        <ul className={styles.comments}>
          {comments?.map((comment) => (
            <li key={comment?._id} className={styles.comment}>
              <div className={styles.commentUser}>
                <span>{comment?.user_id?.first_name} </span>
                <span>{comment?.user_id?.last_name}</span>
              </div>
              <p>{comment?.content}</p>
              {comment?.user_id?._id === user?._id && (
                <div className={styles.commentAction}>
                  {/* <img
                    onClick={() => deleteComment(comment?._id)}
                    src="/delete.png"
                    alt="delete"
                  />
                  <img
                    onClick={() => setEditableComment(comment)}
                    src="/editing.png"
                    alt="editing"
                  /> */}
                  <button
                    style={{ background: "red" }}
                    onClick={() => deleteComment(comment?._id)}
                  >
                    {/* to delete a comment */}
                    Delete
                  </button>
                  <button onClick={() => setEditableComment(comment)}>
                    Edit
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Comments;
