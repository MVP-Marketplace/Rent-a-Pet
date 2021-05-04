import { useRef } from "react";
import PropTypes from "prop-types";
import Header from "./header";
// import Image from "./image";
import { Image, Video } from "cloudinary-react";
import Actions from "./actions";
import Footer from "./footer";
import Comments from "./comments";

export default function Post(content) {
  let post = content.post;
  let likedPic = post.like.includes(post.user_id);
  const commentInput = useRef(null);

  const handleFocus = () => commentInput.current.focus();
  return (
    <div className="rounded col-span-4 border bg-white border-gray-primary mb-12">
      <Header username={post.username} />
      <Image
        // key={key}
        cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
        publicId={post.media}
        // width="300"
        crop="scale"
      />
      {/* // <Image src={post.media} caption={post.caption} /> */}

      <Actions
        docId={post._id}
        totalLikes={post.like.length}
        likedPhoto={likedPic}
        // handleFocus={handleFocus}
      />
      <Footer caption={post.caption} username={post.username} />
      <Comments
        docId={post._id}
        // comments={content.comments}
        // posted={content.dateCreated}
        // commentInput={commentInput}
      />
    </div>
  );
}

Post.propTypes = {
  content: PropTypes.shape({
    username: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    docId: PropTypes.string.isRequired,
    userLikedPhoto: PropTypes.bool.isRequired,
    likes: PropTypes.array.isRequired,
    comments: PropTypes.array.isRequired,
    dateCreated: PropTypes.number.isRequired,
  }),
};
