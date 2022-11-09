import axios from "axios";

export default class LoginApi {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:8080/login/",
    });
    this.pathRest = `http://localhost:8080/login/`;
    this.auth = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  getLogin() {
    return new Promise((resolve, reject) => {
      this.api
        .get(`/`, this.auth)
        .then((response) => {
          resolve(response.data);
        })
        .catch((e) => {
          reject(e);
          console.log(e);
        });
    });
  }

  setLogin(data) {
    return new Promise((resolve, reject) => {
      console.log(data, "a")

      this.api
        .post(`/`, JSON.stringify(data), this.auth)
        .then((response) => {
          resolve(response.data);
          console.log(response.data, "hm2");
          return response.data;
        })
        .catch((e) => {
          reject(e);
        });
    });
  }

}