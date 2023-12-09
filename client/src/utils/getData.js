import axios from "axios";

const getData = async (url) => {
    try {
        const { data } = await axios.get(url);
        return data
      } catch (error) {
        console.log(error);
      }
}

export default getData