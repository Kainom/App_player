import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8000/futebol",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 seconds
  validateStatus: (status) => {
    return status >= 200 && status < 300; // default
  },
});
