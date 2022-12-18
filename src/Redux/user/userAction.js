import axios from "axios";
import { BASE_URL, DEVICE_LIST, LOGIN, TOPIC_INFO } from "../../utils/ApiRoute/apiRoutes";
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
  return { type: "LOGIN_USER", preload: data };
};

export const setListDevice = (data) => {
  return { type: "GET_ALL_DEVICE", preload: data };
};

export const setAllTopic = (arr) => {
  return {type:"SET_ALL_TOPIC", preload: arr }
}

export const getAllTopic = (serialNumber) => {
  return (dispatch) => {
    dispatch(loader_true())

    const fetcher = async () => {
      const { data, status } = await callApi(
        TOPIC_INFO(serialNumber),
        true,
        "{}",
        "get"
      );
      dispatch(setAllTopic(data))
      dispatch(loader_false())
    };

    fetcher();
  };
};

export const fetchAllDevice = () => {
  return (dispatch) => {
    const fetcher = async () => {
      const { data, status } = await callApi(DEVICE_LIST, true, "{}", "get");
      console.log(data);
      dispatch(setListDevice(data));
    };
    fetcher();
  };
};

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
        dispatch(loginUser("bobo"));
        dispatch(fetchAllDevice());
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

export const setDeviceTarget = (obj) => {
  return { type: "SET_TARGET_DEVICE", preload: obj };
};

export const setDeviceForGetTopic = (obj) => {
  return (dispatch) => {
    console.log(obj)
    dispatch(setDeviceTarget(obj));
    dispatch(getAllTopic(obj.serial));
  }
}