import axios from "axios";
//LOAD env
const KEY = "18744643-9e4b-4046-99a1-81f3baa49dff";

export default axios.create({
  baseURL: "https://public-api.tracker.gg/v2/csgo/standard",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
//76561198249008602
