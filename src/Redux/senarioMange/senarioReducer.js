const initializeState = {
  allSenario: [],
};

const senarioReducer = (state = initializeState, action) => {
  const { type, preload } = action;

  switch (type) {
    case "ADD_SENARIO":
      const list = [...state.allSenario, preload];
      const uniqIdList = list.map((item, index) => {
        return { ...item, id: index + 1 };
      });
      return { ...state, allSenario: uniqIdList };
    default:
      return state;
  }
};


export default senarioReducer;