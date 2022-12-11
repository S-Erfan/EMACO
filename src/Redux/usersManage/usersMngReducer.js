const initialState = {
  allUsers: [],
};

const usersMngReducer = (state = initialState, action) => {
  const { type, preload } = action;

  switch (type) {
    case "ADD_USER":
      const listAllUsers = [...state.allUsers, preload];
      const uniqIdList = listAllUsers.map((item, index) => {
        return { ...item, id: index + 1 };
      });
      return { ...state, allUsers: uniqIdList };
    case "DELETED_USER": 
      const deletedArr = state.allUsers.filter(item => item.id !== preload);
      return {...state, allUsers: deletedArr}
    default:
      return state;
  }
};


export default usersMngReducer;