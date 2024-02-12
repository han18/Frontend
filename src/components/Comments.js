import { useState, useEffect } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    // Fetch comments on component mount
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await fetch("http://localhost:3100/api/comments");
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleAddComment = async () => {
    try {
      const response = await fetch("http://localhost:3100/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: newComment }),
      });

      const data = await response.json();
      setComments([...comments, data]);
      setNewComment("");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const handleUpdateComment = async (id, updatedContent) => {
    try {
      const response = await fetch(`http://localhost:3100/api/comments/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: updatedContent }),
      });

      const updatedComment = await response.json();
      const updatedComments = comments.map((comment) =>
        comment._id === id ? updatedComment : comment
      );
      setComments(updatedComments);
    } catch (error) {
      console.error("Error updating comment:", error);
    }
  };

  const handleDeleteComment = async (id) => {
    try {
      const response = await fetch(`http://localhost:3100/api/comments/${id}`, {
        method: "DELETE",
      });

      if (response.status === 200) {
        const updatedComments = comments.filter(
          (comment) => comment._id !== id
        );
        setComments(updatedComments);
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment._id}>
            {comment.content}
            <button
              onClick={() =>
                handleUpdateComment(comment._id, "Updated Content")
              }
            >
              Update
            </button>
            <button onClick={() => handleDeleteComment(comment._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Enter new comment"
        />
        <button onClick={handleAddComment}>Add Comment</button>
      </div>
    </div>
  );
};

export default Comments;
