export class ApiService {
  constructor(is_auth = false) {
    let header_var = {
      Accept: "application/json",
    };
    if (is_auth) header_var["X-XSRF-TOKEN"] = this.getCookie("XSRF-TOKEN");

    this.fetch_object = {
      headers: header_var,
      mode: "cors",
    };
  }

  getCookie(name) {
    let cookie_value = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookie_value = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookie_value;
  }

  async post(url, data) {
    this.fetch_object["method"] = "POST";
    if (
      typeof data !== "undefined" &&
      data !== undefined &&
      data !== null &&
      data !== "" &&
      data
    )
      this.fetch_object["body"] = data;
    return fetch(url, this.fetch_object);
  }

  async get(url) {
    this.fetch_object["method"] = "GET";
    return fetch(url, this.fetch_object);
  }
}
