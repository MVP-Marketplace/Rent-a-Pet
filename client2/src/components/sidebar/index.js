import React from "react";
import useUser from "../../hooks/use-user";
import User from "./user";
import Suggestions from "./suggestions";
import CreatePost from "../createPost";
import "./style.css";

export default function Sidebar() {
  const {
    user: { docId, fullName, username, userId, following },
  } = useUser();

  // Get the modal
  const modal = document.getElementById("myModal");

  return (
    <div className="p-4">
      <User username={username} fullName={fullName} />
      <Suggestions
        userId={userId}
        following={following}
        loggedInUserDocId={docId}
      />
      <br />
      <button
        id="myBtn"
        onClick={() => {
          modal.style.display = "block";
        }}
      >
        Make a Post
      </button>
      <div id="myModal" class="modal">
        <div className="modal-content">
          <span
            className="close"
            onClick={() => {
              modal.style.display = "none";
            }}
          >
            &times;
          </span>
          <CreatePost userId={userId} username={username} />
        </div>
      </div>
    </div>
  );
}
