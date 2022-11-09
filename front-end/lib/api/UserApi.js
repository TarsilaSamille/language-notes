import axios from "axios";

export default class UserApi {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:8080/user/",
    });
    this.pathRest = `http://localhost:8080/user/`;
    this.auth = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  getUsers() {
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

  setUser(user) {
    console.log(user);
    return new Promise((resolve, reject) => {
      this.api
        .post(`/`, JSON.stringify(user), this.auth)
        .then((response) => {
          resolve(response.data);
          return response.data;
        })
        .catch((e) => {
          reject(e);
        });
    });
  }

  setUserUpdate(user) {
    return new Promise((resolve, reject) => {
      this.api
        .post(`/${user.id}`, JSON.stringify(user), this.auth)
        .then((response) => {
          resolve(response.data);
          return response.data;
        })
        .catch((e) => {
          reject(e);
        });
    });
  }

}