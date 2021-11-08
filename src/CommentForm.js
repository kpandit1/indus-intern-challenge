import React from "react";

export default function CommentForm({
  value,
  setValue,
  handleSubmit,
  disabled,
}) {
  return (
    <form
      className="comment-form"
      onSubmit={handleSubmit}
      aria-disabled={String(disabled)}
    >
      <input
        disabled={disabled}
        type="text"
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
        placeholder="Enter comment here"
      />
    </form>
  );
}
