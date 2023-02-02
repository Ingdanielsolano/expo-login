import { combineReducers } from "redux";
import authReducer from "../services/auth/reducer";

const appReducer = () =>
  combineReducers({
    auth: authReducer,
  });

const rootReducer = () => (state: any, action: any) => {
  return appReducer()(state, action);
};

export default rootReducer;
