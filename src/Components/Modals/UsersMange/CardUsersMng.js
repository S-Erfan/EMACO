import React from "react";
import { CardDetailUsers } from "./modalStyle";
import DeleteBin6LineIcon from "remixicon-react/DeleteBin6LineIcon";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../../Redux/usersManage/usersMngAction";


const CardUsersMng = ({name, phone, id}) => {

    const dispatch = useDispatch();

    const removeItem = () => {
        dispatch(deleteUser(id));
    };

  return (
    <CardDetailUsers className="glass_item">
      <div className="input_holder">
        <span>{name}</span>
        <span>{phone}</span>
      </div>
      <div className="btn_holder">
        <DeleteBin6LineIcon onClick={removeItem} />
      </div>
    </CardDetailUsers>
  );
};

export default CardUsersMng;
