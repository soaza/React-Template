import axios from "axios";

const BACKEND_URL = "";

interface IFetchWrapper {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: any;
}

const axiosWrapper = ({ url, method, body }: IFetchWrapper) => {
  switch (method) {
    case "GET":
      return axios.get(`${BACKEND_URL}/${url}`).then((res) => {
        return res.data;
      });

    case "POST":
      return axios.post(`${BACKEND_URL}/${url}`, body).then((res) => {
        return res.data;
      });

    case "PUT":
      return axios.put(`${BACKEND_URL}/${url}`, body).then((res) => {
        return res.data;
      });

    case "DELETE":
      return axios.delete(`${BACKEND_URL}/${url}`).then((res) => {
        return res.data;
      });
  }
};
