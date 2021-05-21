import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  //Get users
  getUsers: function () {
    return axios.get("/api/user");
  },
};
