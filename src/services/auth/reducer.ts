import { handleActions } from "redux-actions";
import { IAuthReducer } from "./interface";

export const INITIAL_STATE: IAuthReducer = {
  loading: {
    login: false,
  },
  error: {
    login: undefined,
  },
  success: {
    login: undefined,
  },
};

const reducer = handleActions(
  {
    AUTH: {
      LOGIN: (state: IAuthReducer) => ({
        ...state,
        loading: { ...state.loading, login: true },
        error: { ...state.error, login: undefined },
      }),
      LOGIN_RESPONSE: {
        next(state: IAuthReducer, { payload: { token, profile } }: any) {
          return {
            ...state,
            token,
            profile,
            isLogged: true,
            loading: { ...state.loading, login: false },
            success: { login: true },
            error: INITIAL_STATE.error,
          };
        },
        throw(state, { payload: { message } }: any) {
          return {
            ...state,
            error: { ...state.error, login: message },
            success: { ...state.success, login: undefined },
            loading: { ...state.loading, login: false },
          };
        },
      },
    },
  },
  INITIAL_STATE
);

export default reducer;
