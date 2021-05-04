/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  //Get users
  getUsers: function () {
    return axios.get("/api/user");
  },
  //Add follower
  addFollower: function (info) {
    const current = "607e4f5aa42d2a89b3a8f783";
    // console.log(info);
    return axios.put(`/api/user/${current}`, { info });
  },
  //Create a comment
  createComment: function (info) {
    console.log(info);
    return axios.post(`/api/postComment`, { info });
  },
  //Create a post
  createPost: function (data) {
    console.log(data);
    return axios.post(`/api/post`, { data });
  },
  //Get post
  getPost: function () {
    return axios.get("/api/post");
  },
  //Like post
  addPostLike: function (data) {
    console.log(data);
    let id = data.post_id;
    let user_id = data.user_id;
    return axios.put(`/api/post/${id}`, { user_id, action: "add" });
  },
  //Remove like post
  removePostLike: function (data) {
    console.log(data);
    let id = data.post_id;
    let user_id = data.user_id;
    return axios.put(`/api/post/${id}`, { user_id, action: "remove" });
  },
};
