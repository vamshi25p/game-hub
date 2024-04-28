import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8b26471c01234987932fc4b067c4fb2c",
  },
});
