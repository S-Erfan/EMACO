export const addUser = (name, phone) => {
    return {type: "ADD_USER", preload: {name, phone}}
};

export const deleteUser = (id) => {
    return {type: "DELETED_USER", preload: id}
};
