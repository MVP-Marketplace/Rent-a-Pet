import { useState, useContext } from "react";
import PropTypes from "prop-types";
// import FirebaseContext from "../../context/firebase";
import UserContext from "../../context/user";
import API from "../../utils/API";

export default function Actions({
  docId,
  totalLikes,
  likedPhoto,
  handleFocus,
}) {
  //Get userId
  const {
    user: { uid: userId },
  } = useContext(UserContext);

  const [toggleLiked, setToggleLiked] = useState(likedPhoto);
  const [likes, setLikes] = useState(totalLikes);
  // const { firebase, FieldValue } = useContext(FirebaseContext);

  // const handleToggleLiked = async () => {
  //   console.log(userId);
  //   setToggleLiked((toggleLiked) => !toggleLiked);

  //   await firebase
  //     .firestore()
  //     .collection("photos")
  //     .doc(docId)
  //     .update({
  //       likes: toggleLiked
  //         ? FieldValue.arrayRemove(userId)
  //         : FieldValue.arrayUnion(userId),
  //     });

  //   setLikes((likes) => (toggleLiked ? likes - 1 : likes + 1));
  // };

  const handleToggleLiked = async () => {
    setToggleLiked((toggleLiked) => !toggleLiked);

    // console.log(docId, userId);

    if (!toggleLiked) {
      //Create like of post
      API.addPostLike({ post_id: docId, user_id: userId })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else {
      //Create like of post
      API.removePostLike({ post_id: docId, user_id: userId })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }

    setLikes((likes) => (toggleLiked ? likes - 1 : likes + 1));
  };

  return (
    <>
      <div className="flex justify-between p-4">
        <div className="flex">
          <svg
            onClick={handleToggleLiked}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            tabIndex={0}
            className={`w-8 mr-4 select-none cursor-pointer ${
              toggleLiked ? "fill-red text-red-primary" : "text-black-light"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          {/* <svg
            onClick={handleFocus}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleFocus();
              }
            }}
            className="w-8 text-black-light select-none cursor-pointer mr-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            tabIndex={0}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg> */}
          <svg
            className="w-8 text-black-light select-none cursor-pointer"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="p-4 py-0">
        <p className="font-bold">
          {likes === 1 ? `${likes} like` : `${likes} likes`}
        </p>
      </div>
    </>
  );
}

Actions.propTypes = {
  docId: PropTypes.string.isRequired,
  totalLikes: PropTypes.number.isRequired,
  likedPhoto: PropTypes.bool.isRequired,
  handleFocus: PropTypes.func.isRequired,
};
