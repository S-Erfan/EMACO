import axios from "axios";
import { BASE_URL, LOGIN } from "../../utils/ApiRoute/apiRoutes";
import callApi from "../../utils/callApi/callApi";
import notify from "../../utils/toast/notify";
import { saveTokenLocal } from "../../utils/token/userToken";

export const loader_true = () => {
  return { type: "LOADER_TRUE" };
};

export const loader_false = () => {
  return { type: "LOADER_FALSE" };
};

export const loginUser = (data) => {
  return {type: "LOGIN_USER", preload: data }
}

export const authUser = (phone, password) => {
  return (dispatch) => {
    dispatch(loader_true);
    const fetcher = async () => {
      const raw = JSON.stringify({
        cell_phone: phone,
        password: password,
      });

      const { data, status } = await callApi(LOGIN, false, raw, "post");

      if (status === 200) {
        saveTokenLocal(data.access);
        notify("با موفقیت وارد حساب کاربری خود شدید.", "success");
        dispatch(loginUser("bobo"))
      } else {
        notify(
          status === 401
            ? "نام کاربری یا رمز عبور صحیح نمی باشد"
            : "خطا سیستمی ، لطفا مجدد در لحظات دیگر امتحان نمایید",
          "error"
        );
      }

      dispatch(loader_false);
    };

    fetcher();
  };
};
