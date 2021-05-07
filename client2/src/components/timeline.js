import React, { useEffect, useState, useContext } from "react";
import Skeleton from "react-loading-skeleton";
// import usePhotos from "../hooks/use-photos";
import Post from "./post";
import API from "../utils/API";

export default function Timeline() {
  const [post, setPost] = useState();
  // const [postLength, setPostLength] = useState(0);

  const loadPost = async () => {
    try {
      await API.getPost()
        .then((res) => {
          setPost(res.data);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadPost();
  }, []);

  // const { photos } = usePhotos();

  return (
    <div className="container col-span-2">
      {!post ? (
        <Skeleton count={4} width={600} height={500} className="mb-5" />
      ) : post?.length > 0 ? (
        post.map((content, index) => <Post key={index} post={content} />)
      ) : (
        <p className="text-center text-2xl">Follow people to see photos!</p>
      )}
    </div>
  );
}
