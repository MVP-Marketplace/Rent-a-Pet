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
};
