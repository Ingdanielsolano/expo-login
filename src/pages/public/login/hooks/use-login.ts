import { useState, useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../services/types/redux";
import AuthActions from "../../../../services/auth/actions";

interface IFormValues {
  username: string;
  password: string;
}

interface IUseLogin {
  formData: IFormValues;
  setData: (values: IFormValues) => void;
  submit: () => void;
}

const useLogin = (): IUseLogin => {
  const dispatch = useAppDispatch();

  const [formData, setData] = useState<IFormValues>({
    username: "",
    password: "",
  });

  const { success, loading } = useAppSelector((state) => state.auth);

  useEffect(() => {
    console.log(success);
  }, [success]);

  const submit = () => {
    dispatch(AuthActions.login(formData));
  };

  return {
    formData,
    setData,
    submit,
  };
};

export default useLogin;
