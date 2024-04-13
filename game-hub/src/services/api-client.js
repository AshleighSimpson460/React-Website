import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2d347f8e287e49b39212a6e21f647b75",
  },
});
