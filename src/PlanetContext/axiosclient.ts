import axios from "axios";

const planetsApi = axios.create({
  baseURL: "https://swapi.dev/api/",
  timeout: 1000,
});

export { planetsApi };
