import React, { Component } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import useGetApi from "./useGetApi";

export default function Comments() {
  const { data, loading } = useGetApi(
    "https://kaaro-intern-challenge.firebaseio.com/comments.json"
  );

  return (
    <div>
      <ul></ul>

      <div className="card-action">
        <CommentForm />
      </div>
    </div>
  );
}
