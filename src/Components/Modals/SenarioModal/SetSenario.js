import { AddRounded } from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddNewSenario } from "../../../Redux/senarioMange/senarioAction";
import notify from "../../../utils/toast/notify";
import { InputCusMain } from "../../Shared/globalStyledComponents/globalStyledComponents";
import CardActions from "./CardActions";
import { FormSetSenarioTag, GroundActionsTag } from "./SenarioStyles";

const arr = [
  { id: 1, name: "پریز", place: "اتاق", number: 1 },
  { id: 2, name: "پریز", place: "اتاق", number: 1 },
  { id: 3, name: "گرمایشی", place: "حمام", number: 1 },
  { id: 4, name: "شیشه", place: "سرویس", number: 1 },
  { id: 5, name: "محافظ", place: "اتاق", number: 1 },
];

const SetSenario = () => {

  const dispatch = useDispatch();

  const [selected, setSelected] = useState([]);
  const [nameSenario, setNameSenario] = useState("");

  const clicked = async (obj) => {
    const restArr = selected.find(item => item.id === obj.id);
    if(restArr === undefined){
        await setSelected([...selected, obj]);
    }else{
        const result = selected.filter(item => item.id !== restArr.id);
        await setSelected(result);
    }
  };


  const addHandler = async () => {
    if (nameSenario === "") {
      notify("لطفا نام سناریو را ثبت کنید.", "error");
      return;
    };

    if (selected.length === 0) {
      notify("تجهیزات مورد نظر را انتخاب کنید.", "error");
      return;
    };

    await dispatch(AddNewSenario(nameSenario, selected));
    // setSelected([]);
    // setNameSenario("");

    console.log(selected)
  };


  return (
    <FormSetSenarioTag>
      <div className="input_holder">
        <div>
          <InputCusMain
            placeholder="نام سناریو"
            type="text"
            value={nameSenario}
            onChange={(e) => setNameSenario(e.target.value)}
            height="50px"
          />
        </div>
        <AddRounded onClick={addHandler} />
      </div>
      <GroundActionsTag>
        {arr.map((item) => (
          <CardActions
            key={item.id}
            title={item.name}
            place={item.place}
            number={item.number}
            id={item.id}
            onClick={() => clicked(item)}
          />
        ))}
      </GroundActionsTag>
    </FormSetSenarioTag>
  );
};

export default SetSenario;
