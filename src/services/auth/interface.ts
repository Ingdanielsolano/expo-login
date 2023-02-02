export interface IUserLogin {
  username: string;
  password: string;
}

export interface IAuthReducer {
  loading: {
    login: boolean;
  };
  error: {
    login: any;
  };
  success: {
    login: any;
  };
}
