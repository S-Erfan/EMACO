export const addPlace = (placeItem) =>{
    const obj = {...placeItem, actions: []}
    return {type: "ADD_PLACE", preload: obj}
}

export const removePlace = (idItem) =>{
    return {type: "REMOVE_PLACE", preload: idItem}
};

export const selectTarget = (id) => {
    return {type: "SELECET_PLACE", preload: id}
};

export const setCommandTarget = (obj) => {
    return {type: "SET_COMMAND_TARGET", preload: obj}
};

export const createCommand = (obj) => {
    return { type: "CREATE_COMMANDS", preload: obj };
};

