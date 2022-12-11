import React, { useState } from "react";
import { InputCusMain } from "../../Shared/globalStyledComponents/globalStyledComponents";
import DefaultModal from "../DefaultModal/DefaultModal";
import { FormAddUserDiv, ListUsersDiv } from "./modalStyle";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { TypeNumber, TypepersianNumber } from "../../../utils/helper/helper";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../../utils/toast/notify";
import { addUser } from "../../../Redux/usersManage/usersMngAction";
import CardUsersMng from "./CardUsersMng";

const UsersManager = ({ handleClose, open }) => {
  const dispatch = useDispatch();
  const allUsersMng = useSelector((state) => state.usersMng.allUsers);

  const [username, setUsername] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const addNewUser = () => {
    if (username === "" || userPhone === "") {
      notify("نام کاربری را وارد کنید.", "error");
    } else {
      dispatch(addUser(username, userPhone));
      notify("با موفقیت ثبت شد.", "success");
      setUserPhone("");
      setUsername("");
    }
  };

  return (
    <>
      <DefaultModal
        title={"مدریت کاربران"}
        open={open}
        handleClose={handleClose}
      >
        <FormAddUserDiv>
          <div className="input_holder">
            <InputCusMain
              placeholder="نام کاربر"
              height={"45px"}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <InputCusMain
              placeholder="شماره کاربر"
              height={"45px"}
              type="text"
              value={userPhone}
              onChange={(e) => setUserPhone(TypepersianNumber(e.target.value))}
              onKeyDown={TypeNumber}
            />
          </div>
          <div className="btn_holder">
            <AddRoundedIcon onClick={addNewUser} />
          </div>
        </FormAddUserDiv>

        <ListUsersDiv>
          <div className="sms_icon">
            <AddRoundedIcon />
          </div>

          {allUsersMng.map((item) => (
            <CardUsersMng
              key={item.id}
              id={item.id}
              name={item.name}
              phone={item.phone}
            />
          ))}
        </ListUsersDiv>
      </DefaultModal>
    </>
  );
};

export default UsersManager;
