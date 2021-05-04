import React, { useEffect, useState, useContext } from "react";
import Skeleton from "react-loading-skeleton";
import usePhotos from "../hooks/use-photos";
import Post from "./post";
// import { Image, Video } from "cloudinary-react";
import API from "../utils/API";

// export default function Home() {
//   const [imageIds, setImageIds] = useState();
//   const loadImages = async () => {
//     try {
//       const res = await fetch("/api/image");
//       const data = await res.json();
//       console.log(data);
//       setImageIds(data);
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   useEffect(() => {
//     loadImages();
//   }, []);

//   return (
//     <div>
//       <h1 className="title">Cloudinary Gallery</h1>
//       <div className="gallery">
//         {imageIds &&
//           imageIds.map((imageId, index) =>
//             imageId.media === "image" ? (
//               <div>
//                 <Image
//                   key={index}
//                   cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
//                   publicId={imageId.id}
//                   width="300"
//                   crop="scale"
//                 />
//                 <p>Caption</p>
//               </div>
//             ) : (
//               <Video
//                 key={index}
//                 cloudName="dxh7yap9i"
//                 publicId={imageId.id}
//                 width="300"
//                 crop="scale"
//               />
//             )
//           )}
//       </div>
//     </div>
//   );
// }
export default function Timeline() {
  const [post, setPost] = useState();

  const loadPost = async () => {
    try {
      API.getPost()
        .then((res) => setPost(res.data))
        .catch((err) => console.log(err));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadPost();
  }, []);

  const { photos } = usePhotos();
  // console.log(post);

  return (
    <div className="container col-span-2">
      {!post ? (
        <Skeleton count={4} width={600} height={500} className="mb-5" />
      ) : post?.length > 0 ? (
        post.map((content, index) => (
          //  console.log(content)
          <Post key={index} post={content} />
        ))
      ) : (
        <p className="text-center text-2xl">Follow people to see photos!</p>
      )}
    </div>
    // <div className="container col-span-2">
    //   {!photos ? (
    //     <Skeleton count={4} width={600} height={500} className="mb-5" />
    //   ) : photos?.length > 0 ? (
    //     photos.map((content) => <Post key={content.docId} content={content} />)
    //   ) : (
    //     <p className="text-center text-2xl">Follow people to see photos!</p>
    //   )}
    // </div>
  );
}
