/* eslint-disable @typescript-eslint/no-explicit-any */

import { IUserLogin } from "./interface";

export class AuthApi {
  static login = (user: IUserLogin): Promise<any> =>
    new Promise((resolve, reject): any => {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      };
      fetch(
        `https://dr-app-back-test.herokuapp.com/token-auth/`,
        requestOptions
      )
        .then((response) => {
          console.log("response.status");
          console.log(response.status);

          return response.json();
        })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
}
