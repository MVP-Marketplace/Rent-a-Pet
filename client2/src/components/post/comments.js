import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { formatDistance } from "date-fns";
import { Link } from "react-router-dom";
import AddComment from "./add-comment";
import API from "./../../utils/API";

export default function Comments({
  docId,
  postComment,
  // posted,
  commentInput,
}) {
  const [comments, setComments] = useState();

  // TODO
  // Get new comment when it is submitted

  //Get comment for each post
  const loadComments = async () => {
    try {
      await API.getComments(docId)
        .then((res) => {
          setComments(res.data);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.error(err);
    }
  };

  //Retrieve comments upon a change
  useEffect(() => {
    loadComments();
  }, []);

  return (
    <div>
      {comments ? (
        <div className="p-4 pt-1 pb-4">
          {comments.slice(0, 10).map((item, index) => (
            <p key={`${index}`} className="mb-1">
              <Link to={`/p/${item.username}`}>
                <span className="mr-1 font-bold">{item.username}</span>
              </Link>
              <span>{item.comment}</span>
            </p>
          ))}
          {/* TODO */}
          {/* ADD Date Posted */}
          {/* <p className="text-gray-base uppercase text-xs mt-2">12 ago</p> */}
        </div>
      ) : (
        <div>No</div>
      )}

      <AddComment
        docId={docId}
        comments={comments}
        setComments={setComments}
        commentInput={commentInput}
      />
    </div>
  );
  //   return (
  //     <div>
  //       <div className="p-4 pt-1 pb-4">
  //         {comments.length >= 3 && (
  //           <p className="text-sm text-gray-base mb-1 cursor-pointer">
  //             View all comments
  //           </p>
  //         )}
  //         {comments.slice(0, 3).map((item) => (
  //           <p key={`${item.comment} - ${item.displayName}`} className="mb-1">
  //             <Link to={`/p/${item.displayName}`}>
  //               <span className="mr-1 font-bold">{item.displayName}</span>
  //             </Link>
  //             <span>{item.comment}</span>
  //           </p>
  //         ))}
  //         <p className="text-gray-base uppercase text-xs mt-2">
  //           {formatDistance(posted, new Date())} ago
  //         </p>
  //       </div>

  //       <AddComment
  //         docId={docId}
  //         comments={comments}
  //         setComments={setComments}
  //         commentInput={commentInput}
  //       />
  //     </div>
  //   );
}

Comments.propTypes = {
  docId: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  posted: PropTypes.number.isRequired,
  commentInput: PropTypes.object.isRequired,
};
