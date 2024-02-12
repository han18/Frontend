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
            `http://localhost:3100/api/comments`
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

    if (editableComment?._id) {
      const options = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: comment, user_id: user?._id }),
      };

      fetch(
        `http://localhost:3100/api/comments/${editableComment?._id}`,
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
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: comment, user_id: user?._id }),
      };

      fetch("http://localhost:3100/api/comments", options)
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
    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    fetch(`http://localhost:3100/api/comments/${id}`, options)
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