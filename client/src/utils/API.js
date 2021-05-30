import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  //Get users
  getUsers: function () {
    return axios.get("/api/user");
  },
  getCurrentUser: function (id) {
    return axios.get(`/api/user/${id}`);
  },
  createUser: function (user) {
    return axios.post("/api/user", user);
  },
  updateUser: function (data) {
    // console.log(data);
    return axios.put(`/api/user/${data._id}`, data);
  },
};
