export const saveTokenLocal = (token) => {
  let obj = {
    token: token,
    expiration: new Date().getTime() + 60 * 60 * 24 * 365,
  };
  localStorage.setItem("UTA", JSON.stringify(obj));
};

export const getTokenLocal = () => {
  if(localStorage.getItem("UTA") == null){
    return false
  }else{
    const obj = JSON.parse(localStorage.getItem("UTA"));
    const date = new Date().getTime();
    if(date > obj.expiration){
      localStorage.removeItem("UTA");
      return false
    }
    return obj.token;
  }
} 