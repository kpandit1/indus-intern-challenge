import React from "react";

export default function Comment({ username, text }) {
  const safeUsername = encodeURIComponent(username);

  return (
    <li>
      <a href={`/users/` + safeUsername}>{username}</a>: {text}
    </li>
  );
}
