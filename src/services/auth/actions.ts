import { createActions } from "redux-actions";
import { IUserLogin } from "./interface";

const { auth } : any = createActions({
  AUTH: {
    LOGIN: (user: IUserLogin) => user,
    LOGIN_RESPONSE: (token: string) => token,
  },
});

export default auth;
