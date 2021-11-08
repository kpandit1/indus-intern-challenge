import React from "react";
import "./App.css";
import Comments from "./Comments";

function App() {
  // The url passed in can be accessed through the Comment component's props.
  // Use this to make calls to the backend/API/database
  return (
    <div className="container">
      <div className="card">
        <div className="card-image">
          <img
            width="400px"
            src="https://images.unsplash.com/photo-1593789382576-54f489574d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt={"mario action figure"}
          />
        </div>
        <div className="card-content">
          <Comments
            url="https://kaaro-intern-challenge.firebaseio.com/comments.json"
            username="bowser"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
