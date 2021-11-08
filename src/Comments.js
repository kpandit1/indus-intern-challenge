import React, { useState } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import useGetApi from "./useGetApi";
import usePostApi from "./usePostApi";

export default function Comments({ username, url }) {
  const { data, loading, refetch } = useGetApi(url);
  const [text, setText] = useState("");

  const [postComment, { loading: posting }] = usePostApi(url);

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    await postComment({
      body: {
        username,
        text,
      },
    });

    setText("");
    await refetch();
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      <ul>
        {data &&
          Object.keys(data).map((key) => (
            <Comment
              text={data[key].text}
              username={data[key].username}
              key={key}
            />
          ))}
      </ul>

      <div className="card-action">
        <CommentForm
          value={text}
          setValue={setText}
          disabled={posting}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
