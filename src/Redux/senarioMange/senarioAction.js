export const AddNewSenario = (name, arr) => {
  const mySenario = {
    name: name,
    actions: arr,
  };

  return { type: "ADD_SENARIO", preload: mySenario };
};
