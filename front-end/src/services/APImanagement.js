import axios from "axios";

const getUserStatus = (id) => {
  return axios.get(`https://api.publicapis.org/entries`);
};

export { getUserStatus };
