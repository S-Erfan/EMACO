const initializeState = {
  slectedPlace: [],
  target: "",
  commandTarget: "",
};

const placeReducer = (state = initializeState, action) => {
  const { type, preload } = action;

  switch (type) {
    case "ADD_PLACE":
      const listPlaces = [...state.slectedPlace, preload];
    const uniqIdList = listPlaces.map((item, index) => {
        return {...item, id: index+1 }
    });
      return { ...state, slectedPlace: uniqIdList };
    case "REMOVE_PLACE":
      const removedList = state.slectedPlace.filter(
        (item) => item.id !== preload
      );
      return { ...state, slectedPlace: removedList };
    case "SELECET_PLACE":
      const findObj = state.slectedPlace.filter(item => item.id === preload);
      return {...state, target: findObj[0]};
    case "SET_COMMAND_TARGET":
      return {...state, commandTarget: preload};
      case "CREATE_COMMANDS": 
        const thisPlace = state.slectedPlace.filter(item => item.id === state.target.id);
        const placeIndex = state.slectedPlace.findIndex(item => item.id === state.target.id);
        const commandList = [...thisPlace[0].actions , preload];
        const uniqList = commandList.map((item, index)=> {
          return {...item, uid: index+1 }
        });
        let arrayTst = [];
        const resPro = uniqList.map(item => {
          arrayTst = [...arrayTst, item]
          const count = arrayTst.filter(obj => obj.id === item.id);
          console.log("in map", count);
          if(count.length >= 2) {
            return {...item, number: count.length};
          } else {
            return {...item, number: 1}
          }
        })
        console.log(resPro)
        const result = {...state.target, actions: resPro };
        const bobo = state.slectedPlace;
        bobo[placeIndex] = result;
        console.log(bobo);
        return {...state, slectedPlace : bobo };
        // return state;
    default:
      return state;
  }
};

export default placeReducer;
