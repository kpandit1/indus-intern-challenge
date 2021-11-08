import React, { useState } from "react";

export default function CommentForm({ handleSubmit }) {
  const [comment, setComment] = useState("");

  const onChange = (ev) => setComment(ev.target.value);

  const onSubmit = (ev) => {
    ev.preventDefault();
    handleSubmit(comment);
  };

  return (
    <form className="comment-form" onSubmit={onSubmit}>
      <input
        type="text"
        value={comment}
        onChange={onChange}
        placeholder="Enter comment here"
      />
    </form>
  );
}
