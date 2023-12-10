import axios from "axios";

const getUserData = async (id) => {
    const url = "http://localhost:3000";
    const userEndpoint = `/users/${id}`;
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.get(url + userEndpoint, {
        headers: { Authorization: "Bearer " + token },
      });
      return data
    } catch (error) {
      console.log(error);
    }
  };

export default getUserData