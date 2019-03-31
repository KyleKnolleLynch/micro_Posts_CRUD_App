/**
 *EasyHTTP Library
 * Most modern practice custom library for making HTTP requests using async await
 *
 * @version 3.0.0
 * @author Kyle Lynch
 * @license MIT
 *
 *
 **/

class EasyHTTP {
  // make GET request
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

  // make POST request
  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  }

  //  make PUT HTTP request
  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  }

  //  make HTTP DELETE request
  async delete(url) {
   const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json"
        }
      })
      const resData = await 'Resource Deleted';
      return resData;
  }
}

export const http = new EasyHTTP();