import axios from "axios";

export default class NotesApi {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:8080/note/",
    });
    this.pathRest = `http://localhost:8080/note/`;
    this.auth = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  getNotes() {
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

  getNote(id) {
    return new Promise((resolve, reject) => {
      this.api
        .get(`/${id}`, this.auth)
        .then((response) => {
          resolve(response.data);
        })
        .catch((e) => {
          reject(e);
          console.log(e);
        });
    });
  }
  setNote(data) {
    return new Promise((resolve, reject) => {
      this.api
        .post(`/`, data, this.auth)
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